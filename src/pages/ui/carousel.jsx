import React, { Component } from 'react';
import { Card, Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const contentStyle1 = {
    width:'100%',
    height: '240px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default class Carousels extends Component {

    
    render() {
        return (
            <div>
                <Card title="文字背景轮播" className='card-wrap'>
                    <Carousel autoplay effect="fade">
                        <div><h3 style={contentStyle}>React</h3></div>
                        <div><h3 style={contentStyle}>Vue</h3></div>
                        <div><h3 style={contentStyle}>JS</h3></div>
                    </Carousel>
                </Card>

                <Card title="图片轮播">
                    <Carousel autoplay effect="fade">
                        <div><img src="/carousel-img/carousel-1.jpg" style={contentStyle1}/></div>
                        <div><img src="/carousel-img/carousel-2.jpg" style={contentStyle1}/></div>
                        <div><img src="/carousel-img/carousel-3.jpg" style={contentStyle1}/></div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}
