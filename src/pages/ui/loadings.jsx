import React, { Component } from 'react';
import { Card,Spin,Alert } from 'antd';
import { LoadingOutlined,SearchOutlined } from '@ant-design/icons';
import './ui.less';

export default class Loadings extends Component {
    render() {
        return (
            <div>
                <Card title="Spin用法" className='card-wrap'>
                    <Spin size="small" />
                    <Spin style={{margin:'0 10px'}} />
                    <Spin size="large" />
                    <Spin indicator={<LoadingOutlined style={{fontSize:30}} />} style={{margin:'0 10px'}} />
                    <Spin indicator={<SearchOutlined style={{fontSize:30}} />} />
                </Card>

                <Card title="内容遮罩" className='card-wrap'>
                    <Alert
                        message="react课程"
                        description="欢迎来到react课程"
                        type="info"
                    />
                    <Spin size="large">
                        <Alert
                            message="react课程"
                            description="欢迎来到react课程"
                            type="success"
                        />
                    </Spin> 
                    <Spin indicator={<LoadingOutlined style={{fontSize:30}} />}>
                        <Alert
                            message="react课程"
                            description="欢迎来到react课程"
                            type="success"
                        />
                    </Spin> 
                </Card>
            </div>
        )
    }
}
