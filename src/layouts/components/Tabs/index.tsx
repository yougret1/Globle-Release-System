import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import "./index.scss";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
const defaultPanes = [
	{
		label: "首页",
		key: "/home"
	},
	{
		label: "数据大屏",
		key: "/dataScreen"
	},
	{
		label: "使用 Hooks",
		key: "/proTable/useHooks"
	},
	{
		label: "使用 Component",
		key: "/proTable/useComponent"
	},
	{
		label: "数据可视化",
		key: "/dashboard/dataVisualize"
	}
];

const TheTabs = () => {
	const navigate = useNavigate();
	const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
	const [items, setItems] = useState(defaultPanes);
	const { pathname } = useLocation();
	const newTabIndex = useRef(0);
	const reflectKey = (path: string) => {
		setActiveKey(path);
		navigate(path);
	};

	useEffect(() => {
		setActiveKey(pathname);
	}, [pathname]);
	const onChange = (key: string) => {
		reflectKey(key);
	};

	const add = () => {
		const newActiveKey = `newTab${newTabIndex.current++}`;
		setItems([...items, { label: "New Tab", key: newActiveKey }]);
		reflectKey(newActiveKey);
	};

	const remove = (targetKey: TargetKey) => {
		const targetIndex = items.findIndex(pane => pane.key === targetKey);
		const newPanes = items.filter(pane => pane.key !== targetKey);
		if (newPanes.length && targetKey === activeKey) {
			const { key } =
				newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
			setActiveKey(key);
		}
		setItems(newPanes);
	};

	const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
		if (action === "add") {
			add();
		} else {
			remove(targetKey);
		}
	};

	return (
		<Tabs
			id="theTab"
			hideAdd
			onChange={onChange}
			activeKey={activeKey}
			type="editable-card"
			onEdit={onEdit}
			defaultActiveKey="1"
			items={items}
		/>
	);
};

export default TheTabs;
