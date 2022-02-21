import React, { Component } from 'react';
import { Card,Button,Modal } from 'antd';

export default class Modals extends Component {
    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }
    //基础模态框
    handleOpen=(type)=>{
        this.setState({
            [type]:true
        })
    }
    //信息确认框
    handleFirm=(type)=>{
        Modal[type]({
            title:"确认？",
            content:"你确定学会react了吗？",
            onCancel:()=>{
                console.log("cancel");
            },
            onOk:()=>{
                console.log("ok");
            }
        })
    }
    
    render() {
        let { showModal1,showModal2,showModal3,showModal4 }=this.state;
        return (
            <div>
                <Card title="基础模态框" className='card-wrap'>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>

                {/* Open */}
                <Modal 
                    title="React" 
                    visible={showModal1}
                    onCancel={()=>
                        this.setState({
                            showModal1:false
                        })
                    }
                >
                    <p>欢迎来到React课程</p>
                </Modal>

                {/* 自定义页脚 */}
                <Modal 
                    title="React" 
                    visible={showModal2}
                    cancelText="算了"
                    onCancel={()=>
                        this.setState({
                            showModal2:false
                        })
                    }
                >
                    <p>欢迎来到React课程</p>
                </Modal>

                {/* 顶部20px弹框 */}
                <Modal 
                    title="React" 
                    visible={showModal3}
                    style={{top:'20px'}}
                    onCancel={()=>
                        this.setState({
                            showModal3:false
                        })
                    }
                >
                    <p>欢迎来到React课程</p>
                </Modal>

                {/* 水平垂直居中 */}
                <Modal 
                    title="React" 
                    visible={this.state.showModal4}
                    centered
                    onCancel={()=>
                        this.setState({
                            showModal4:false
                        })
                    }
                >
                    <p>欢迎来到React课程</p>
                </Modal>

                <Card title="信息确认框" className='card-wrap'>
                    <Button type="primary" onClick={()=>this.handleFirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.handleFirm('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleFirm('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleFirm('warning')}>Warning</Button>
                </Card>
            </div>
        )
    }
}
