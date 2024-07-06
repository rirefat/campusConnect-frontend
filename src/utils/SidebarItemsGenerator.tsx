import { NavLink } from "react-router-dom";
import { TPathItem, TSidebarItem } from "../type";


export const sidebarItemsGenerator = (items:TPathItem[]) => {
    const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/admin/${item.path}`}>{`${item.name}`}</NavLink>
            })
        }
    
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => ({
                    key: child.name,
                    label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
                }))
            })
        }
    
        return acc;
    }, []);

    return sidebarItems;
}
