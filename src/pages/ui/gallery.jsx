import React, { Component } from 'react';
import { Card,Row,Col,Modal } from 'antd';

const {Meta}=Card;
export default class Gallery extends Component {

    state={
        visible:false
    }
    //
    openGallery=(item)=>{
        this.setState({
            imgSrc:'/gallery/'+item,
            visible:true
        })
    }

    render() {
        const imgs=[
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['21.png','22.png','23.png','24.png','25.png'],
        ]

        const imgList=imgs.map(list=>list.map((item,index)=>
            <Card
                key={index}
                style={{marginBottom:'10px'}}
                cover={<img src={'/gallery/'+item} onClick={()=>this.openGallery(item)} alt="" />}
            >
                <Meta title="React Admin" description="interesting React" />
            </Card>
        ))

        return (
            <div>
                <Row gutter={10}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    {/* 一共是24，最后一个得是4才行 */}
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
                <Modal
                    width={300}
                    height={500}
                    visible={this.state.visible}
                    title="图片画廊"
                    footer={null}
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                >
                    <img src={this.state.imgSrc} style={{width:'100%'}} alt="" />
                </Modal>
            </div>
        )
    }
}
