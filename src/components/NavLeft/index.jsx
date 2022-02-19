import React, { Component } from 'react';
import { Menu } from 'antd';
import menuList from './../../config/menuConfig';
import './index.less';

const { SubMenu } = Menu;
export default class NavLeft extends Component {
    state={
        menuTreeNode:""
    }

    componentDidMount=()=>{
        let menuTreeNode=this.renderMenu(menuList);
        this.setState({
            menuTreeNode
        })
    }

    //菜单渲染，递归遍历
    renderMenu=(menuList)=>{
        return menuList.map(item=>{
            if(item.children){
                return (<SubMenu key={item.key} title={item.title}>
                            {this.renderMenu(item.children)}
                        </SubMenu>
                )
            }
            return <Menu.Item key={item.key} title={item.title}>
                {item.title}
            </Menu.Item>
            
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>DC MS</h1>
                </div>
                <Menu theme="dark">
                    {this.renderMenu(menuList)}
                </Menu>
            </div>
        )
    }
}
