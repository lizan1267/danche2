import React, { Component } from 'react';
import { Card,notification,Button } from 'antd';

export default class Notifications extends Component {

    //
    handleOpen=(type,placement)=>{
        if(placement){
            notification.config({
                placement:placement
            })
        }
        notification[type]({
            message:"工资条",
            description:"本月应发工资20000,实到25000"
        })
    }

    render() {
        return (
            <div>
                <Card title="通知提醒框" className='card-wrap'>
                    <Button type="primary" onClick={()=>this.handleOpen("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("info")}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("warning")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("error")}>Error</Button>
                </Card>

                <Card title="通知提醒框2" className='card-wrap'>
                    <Button type="primary" onClick={()=>this.handleOpen("success","topLeft")}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("info","topRight")}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("warning","bottomLeft")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("error","bottomRight")}>Error</Button>
                </Card>
            </div>
        )
    }
}
