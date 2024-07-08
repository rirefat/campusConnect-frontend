import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sidebar/>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Campus Connect © {new Date().getFullYear()} Developed by Rafiul Islam
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;