import { Layout } from "antd";
import TheMenu from "./Menu/index";
import Logo from "./Logo/index";
const { Sider } = Layout;
const TheSider = () => {
	return (
		<Sider trigger={null} collapsible collapsed={false}>
			<Logo />
			<TheMenu />
		</Sider>
	);
};
export default TheSider;
