import { Layout } from "antd";
import AvatarIcon from "./components/AvatarIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
import CollapseIcon from "./components/CollapseIcon";
import "./index.scss";
const { Header } = Layout;

const TheHeader = () => {
	return (
		<Header id="theHeader">
			<div className="left">
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<AvatarIcon />
		</Header>
	);
};
export default TheHeader;
