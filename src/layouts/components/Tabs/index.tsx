import React, { useRef, useState } from "react";
import { Tabs } from "antd";
import "./index.scss";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
type TabPosition = "left" | "right" | "top" | "bottom";
const defaultPanes = [
	{
		label: "首页",
		key: "/home"
	},
	{
		label: "超级表格",
		key: "/proTable"
	},
	{
		label: "数据大屏",
		key: "/dataScreen"
	},
	{
		label: "使用 Hooks",
		key: "/useHooks"
	},
	{
		label: "使用 Component",
		key: "/useComponent"
	},
	{
		label: "数据可视化",
		key: "/dashboard"
	},
	{
		label: "内嵌页面",
		key: "/embedded"
	},
	{
		label: "基础 Form",
		key: "/basicForm"
	},
	{
		label: "校验 Form",
		key: "/validateForm"
	},
	{
		label: "动态 Form",
		key: "/dynamicForm"
	},
	{
		label: "水型图",
		key: "/waterChart"
	},
	{
		label: "柱状图",
		key: "/columnChart"
	},
	{
		label: "折线图",
		key: "/超级表格"
	},
	{
		label: "雷达图",
		key: "/radarChart"
	},
	{
		label: "嵌套环形图",
		key: "/nestedChart"
	}
];

const TheTabs = () => {
	const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
	const [items, setItems] = useState(defaultPanes);
	const newTabIndex = useRef(0);
	const [mode] = useState<TabPosition>("top");
	const onChange = (key: string) => {
		setActiveKey(key);
	};

	const add = () => {
		const newActiveKey = `newTab${newTabIndex.current++}`;
		setItems([...items, { label: "New Tab", key: newActiveKey }]);
		setActiveKey(newActiveKey);
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
			tabPosition={mode}
			items={items}
		/>
	);
};

export default TheTabs;
