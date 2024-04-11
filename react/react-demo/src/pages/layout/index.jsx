import React from 'react';
import { Layout, Flex } from 'antd';
const { Header, Sider, Content } = Layout;
import "./index.css"
import { Outlet, useNavigate } from 'react-router-dom'


const LayoutWrap = () => {
    const navigator = useNavigate()
    const data = [
        { id: 1, title: '班级人员', path: '/layout/students' },
        { id: 2, title: '就业数据', path: '/layout/employment' },
        { id: 3, title: '个人详情', path: '/layout/personal' }
    ]
    return (
        <div className='layout'>
            <Layout>
                <Header className='hd'>
                    <h2>旅梦后台管理</h2>
                    <p>欢迎admin</p>
                </Header>
                <Layout>
                    <Sider width="200px" className='side'>
                        <ul>
                            {
                                data.map(item => (<li key={item.id} className='aside-item' onClick={() => navigator(item.path)}>{item.title}</li>))
                            }
                        </ul>
                    </Sider>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default LayoutWrap;