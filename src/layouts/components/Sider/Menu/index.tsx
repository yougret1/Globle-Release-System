import { Menu } from "antd";
import { useEffect, useState } from "react";
import { getOpenKeys } from "@/utils/util";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuInfo } from "rc-menu/lib/interface";
import {
	HomeOutlined,
	TableOutlined,
	PieChartOutlined,
	FileTextOutlined,
	AreaChartOutlined,
	FundOutlined,
	ShoppingOutlined,
	AppstoreOutlined
} from "@ant-design/icons";
const theMenu = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
	const [openKeys, setOpenKeys] = useState<string[]>([]);
	// 监听当前URL来实现展开menu菜单
	useEffect(() => {
		// console.log(openKeys);
		setOpenKeys(getOpenKeys(pathname));
		setSelectedKeys([pathname]);
	}, [pathname]);

	const onClick = (event: MenuInfo) => {
		console.log("onClick event has been trigger");
		navigate(event.key);
	};

	/**
	 * 重新设置当前menu展开的列表
	 * @param {string[]} openKeys
	 * @returns
	 */
	const onOpenChange = (openKeys: string[]) => {
		//获取现在触发的事件,然后直接拆包填入
		if (openKeys.length == 0) return setOpenKeys(openKeys);
		return setOpenKeys(getOpenKeys(openKeys[openKeys.length - 1]));
	};
	const menuList = [
		{
			label: "首页",
			key: "/home",
			icon: <HomeOutlined />
		},
		{
			label: "数据大屏",
			key: "/dataScreen",
			icon: <AreaChartOutlined />
		},
		{
			label: "超级表格",
			key: "/proTable",
			icon: <TableOutlined />,
			children: [
				{
					label: "使用 Hooks",
					key: "/proTable/useHooks",
					icon: <AppstoreOutlined />
				},
				{
					label: "使用 Component",
					key: "/proTable/useComponent",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "Dashboard",
			key: "/dashboard",
			icon: <FundOutlined />,
			children: [
				{
					key: "/dashboard/dataVisualize",
					label: "数据可视化",
					icon: <AppstoreOutlined />
				},
				{
					key: "/dashboard/embedded",
					label: "内嵌页面",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "表单 Form",
			key: "/form",
			icon: <FileTextOutlined />,
			children: [
				{
					key: "/form/basicForm",
					label: "基础 Form",
					icon: <AppstoreOutlined />
				},
				{
					key: "/form/validateForm",
					label: "校验 Form",
					icon: <AppstoreOutlined />
				},
				{
					key: "/form/dynamicForm",
					label: "动态 Form",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "Echarts",
			key: "/echarts",
			icon: <PieChartOutlined />,
			children: [
				{
					key: "/echarts/waterChart",
					label: "水型图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/columnChart",
					label: "柱状图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/lineChart",
					label: "折线图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/pieChart",
					label: "饼图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/radarChart",
					label: "雷达图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/nestedChart",
					label: "嵌套环形图",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "常用组件",
			key: "/assembly",
			icon: <ShoppingOutlined />,
			children: [
				{
					key: "/assembly/selectIcon",
					label: "Icon 选择",
					icon: <AppstoreOutlined />
				},
				{
					key: "/assembly/batchImport",
					label: "批量导入数据",
					icon: <AppstoreOutlined />
				}
			]
		}
	];
	return (
		<Menu
			theme="dark"
			mode="inline"
			triggerSubMenuAction="click"
			selectedKeys={selectedKeys}
			items={menuList}
			onClick={onClick}
			openKeys={openKeys}
			onOpenChange={onOpenChange}
		></Menu>
	);
};

export default theMenu;
