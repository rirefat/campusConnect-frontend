import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
const { Header, Content, Footer } = Layout;
import { LogoutOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../redux/hooks';
import { logOut } from '../../redux/features/auth/authSlice';

const MainLayout: React.FC = () => {
    const dispatch = useAppDispatch();
    const handleLogout =()=>{
        dispatch(logOut())
    };

    return (
        <Layout style={{ height: '100vh' }}>
            <Sidebar />
            <Layout>
                <Header style={{ padding: '0 5rem', color: "#fff", fontSize: "1.15rem", display: "flex", justifyContent: "end", alignItems: "center" }} >
                    <span
                        onClick={handleLogout}
                        style={{
                            display: "flex",
                            gap: ' 1rem',
                            cursor: "pointer"
                        }}
                    ><LogoutOutlined /> Logout</span>
                </Header>

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