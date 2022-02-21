import React, { Component } from 'react';
import { Card,message,Tabs } from 'antd';
import { PlusOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';

const {TabPane}=Tabs;

//本来有的tab页签
const initialPanes = [
    { title: 'Tab 1', content: 'tab 1', key: '1' },
    { title: 'Tab 2', content: 'tab 2', key: '2' },
    {
      title: 'Tab 3',
      content: 'tab 3',
      key: '3',
    //   closable: false,
    },
  ];

export default class tabs extends Component {

    //前两个card的tab页签的切换面板的回调函数
    callback=(key)=>{
        message.info({
            content:`你选择了 ${key} 页签`
        })
    }


    //新增和删除页签部分————Card3
        newTabIndex = 0; //新页签的名字从0开始
      
        state = {
          activeKey: initialPanes[0].key,
          panes: initialPanes,
        };
      //切换tab标签面板时
        onChange = (activeKey) => {
          this.setState({ activeKey });
          //activeKey 当前活跃的key
        };
      //新增和删除页签的回调
        onEdit = (targetKey, action) => {
          this[action](targetKey);
          //targetKey 要删除的key
        };
      //新增tab页签
        add = () => {
          const { panes } = this.state;
          const activeKey = `newTab${this.newTabIndex++}`; // 0 1 2 3
          const newPanes = [...panes]; //之前本来有的tab页签
          //把新加的tab页签添加进本来有的里边去
          newPanes.push({ title: 'New Tab', content: ' new Tab', key: activeKey });
          //更新state
          this.setState({
            panes: newPanes,
            activeKey,
          });
        };
      //删除tab页签
        remove = targetKey => {
          const { panes, activeKey } = this.state;
          let newActiveKey = activeKey; //把现在活跃的这个的key值赋给newActiveKey
          let lastIndex; //声明一个变量lastIndex
          panes.forEach((pane, i) => {
            if (pane.key === targetKey) { 
              lastIndex = i - 1; //就是删除哪个个，lastIndex就等于删的前一个
            }
          });

          //在本来有的tab页签中过滤掉删的那个
          const newPanes = panes.filter(pane => pane.key !== targetKey);

          //如果剩下的页签数量大于0，并且删除的那个是活跃的那个的话
          if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                //如果lastIndex>=0,就让这个(删掉的前一个)当做当前活跃的
              newActiveKey = newPanes[lastIndex].key;
            } else {
                //如果lastIndex<0,,就让第一个当做当前活跃的
              newActiveKey = newPanes[0].key;
            }
          }
          //如果删除的不是当前活跃的那个的话，本来是哪个活跃就还是哪个活跃，不变
          //更新state
          this.setState({
            panes: newPanes,
            activeKey: newActiveKey,
          });
        };



    render() {
        let { activeKey,panes }=this.state;
        return (
            <div>
                <Card title="tab页签" className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab1" key={1}>html</TabPane>
                        <TabPane tab="Tab2" disabled key={2}>css</TabPane>
                        <TabPane tab="Tab3" key={3}>js</TabPane>
                    </Tabs>
                </Card>

                <Card title="tab带图的页签" className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={<span><PlusOutlined />Tab1</span>} key={1}>html</TabPane>
                        <TabPane tab={<span><EditOutlined />Tab2</span>} key={2}>css</TabPane>
                        <TabPane tab={<span><DeleteOutlined />Tab3</span>} key={3}>js</TabPane>
                    </Tabs>
                </Card>

                <Card title="新增/删除页签" className='card-wrap'>
                    <Tabs
                        type="editable-card"
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                        activeKey={activeKey}
                    >
                        {
                            panes.map(item=>{
                                return <TabPane tab={item.title} key={item.key}>
                                    {item.content}
                                </TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}
