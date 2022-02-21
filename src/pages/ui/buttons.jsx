import React, { Component } from 'react';
import { Card,Button, Radio } from 'antd';
import { PlusOutlined,EditOutlined,
    DeleteOutlined,SearchOutlined,
    DownloadOutlined,LeftOutlined,
    RightOutlined } from '@ant-design/icons';
import './ui.less';
export default class Buttons extends Component {

    state={
        loading:true,
        size:"middle"
    }

    //loading按钮组的关闭按钮
    handleCancel=()=>{
        this.setState({
            loading:false
        })
    }

    //按钮尺寸的调节
    handleChange=(e)=>{
        this.setState({
            size:e.target.value
        })
    }

    render() {
        let { loading,size }=this.state;
        return (
            <div>
                <Card title="基础按钮" className='card-wrap'>
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button disabled>Imooc</Button>
                    <Button danger>Imooc</Button>
                </Card>

                <Card title="图形按钮" className='card-wrap'>
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button>{<SearchOutlined />}</Button>
                    <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
                </Card>

                <Card title="Loading按钮" className='card-wrap'>
                    <Button type="primary" loading={loading}>确定</Button>
                    <Button type="primary" loading={loading} shape="circle"></Button>
                    <Button loading={loading}>点击加载</Button>
                    <Button loading={loading} shape="circle"></Button>
                    <Button onClick={this.handleCancel} type="primary">关闭</Button>
                </Card>

                <Card title="按钮组" style={{marginBottom:'10px'}}>
                    <Button type="primary">{<LeftOutlined />}返回</Button>
                    <Button type="primary">前进{<RightOutlined />}</Button>
                </Card>

                <Card title="按钮尺寸" className='card-wrap'>
                    <Radio.Group onChange={this.handleChange} value={size}>
                        <Radio value="small">小</Radio>
                        <Radio value="middle">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={size}>Imooc</Button>
                    <Button size={size}>Imooc</Button>
                    <Button type="dashed" size={size}>Imooc</Button>
                    <Button danger size={size}>Imooc</Button>
                </Card>
            </div>
        )
    }
}
