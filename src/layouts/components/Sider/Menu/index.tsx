import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, TableOutlined, AreaChartOutlined } from "@ant-design/icons";
const theMenu = () => {
	const { pathname } = useLocation();
	const [menuActive, setMenuActive] = useState(pathname);
	const [menuList] = useState([
		{
			title: "首页",
			path: "/home",
			icon: <HomeOutlined />
		},
		{
			title: "数据大屏",
			path: "/dataScreen",
			icon: <AreaChartOutlined />
		},
		{
			title: "超级表格",
			path: "/proTable",
			icon: <TableOutlined />,
			children: [
				{
					title: "使用 Hooks",
					path: "/table/useHooks"
				},
				{
					title: "使用 Hooks",
					path: "/table/useHooks"
				}
			]
		}
	]);

	useEffect(() => {
		setMenuActive(pathname);
	}, [pathname]);

	return (
		<Menu theme="dark" mode="inline" triggerSubMenuAction="click" selectedKeys={[menuActive]}>
			{menuList.map(item => {
				return (
					<Menu.Item key={item.path} icon={item.icon}>
						<Link to={item.path}>{item.title}</Link>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

export default theMenu;