import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: crypto.randomUUID(),
        label: "Dashboard"
    },
    {
        key: crypto.randomUUID(),
        label: "Profile"
    },
    {
        key: crypto.randomUUID(),
        label: "User Management",
        children: [
            { key: 1, label: "Create user" },
            { key: 2, label: "Create student" },
        ],
    },
];

const logoStyle:React.CSSProperties = {
    color: "whitesmoke",
    textAlign: "center",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const MainLayout: React.FC = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />

                {/* Logo section */}
                <div className="logo logoStyle" style={logoStyle}>
                    <h1>CampusConnect</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        content
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