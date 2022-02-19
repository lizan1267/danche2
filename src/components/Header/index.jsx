import React, { Component } from 'react'
import { Row,Col } from 'antd';
import Utils from '../../utils/utils';
import './index.less';
import axios from 'axios';

export default class Header extends Component {
    state={
        userName:"",
        sysTime:"",
        weather:"",
    }

    componentDidMount=()=>{
        let {getNowTime,getWeather}=this;

        //用户信息
        this.setState({
            userName:"段嘉许"
        })

        //时间
        //先调用一次
        getNowTime();
        //再每秒调用一次
        setInterval(getNowTime(),1000)

        //调用天气
        getWeather();
    }
    //获得时间
    getNowTime=()=>{
        let sysTime=Utils.formateDate(new Date().getTime());
        this.setState({
            sysTime
        })
    }

    //获取天气
    getWeather=()=>{
        axios.get("https://devapi.qweather.com/v7/weather/now?location=101090201&key=ab5bcf08250f47ab8a4fd1745cd58f66")
        .then(res=>{
            let data=res.data;
            if(data.code==="200"){
                this.setState({
                    weather:data.now.text
                })
            }
        })
    }
    

    render() {
        let {userName,sysTime,weather}=this.state;
        return (
            <div>
                <div className="header">
                    <Row className='header-top'>
                        <Col span={24}>
                            <span>欢迎，{userName}</span>
                            <a href="#">退出</a>
                        </Col>
                    </Row>
                    <Row className='breadcrumb'>
                        <Col span={4} className="breadcrumb-title">
                            首页
                        </Col>
                        <Col span={20} className='weather'>
                            <span className='date'>{sysTime}</span>
                            <span className='weather-detail'>{weather}</span>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
