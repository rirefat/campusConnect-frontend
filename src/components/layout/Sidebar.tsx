import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/SidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const logoStyle: React.CSSProperties = {
    color: "whitesmoke",
    textAlign: "center",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
};
const role = 'faculty';
let sidebarItem;

switch (role) {
    case userRole.ADMIN:
        sidebarItem = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
        break;
    case userRole.FACULTY:
        sidebarItem = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
        break;
    case userRole.STUDENT:
        sidebarItem = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
        break;
}


const Sidebar = () => {
    return (
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
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={sidebarItem}
            />
        </Sider>
    );
};

export default Sidebar;