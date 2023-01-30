import { Layout } from "antd";
import TheFooter from "./components/Footer";
import TheHeader from "./components/Header/index";
import TheSider from "./components/Sider/index";
import TheTabs from "./components/Tabs";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
TheHeader;
import "./index.scss";
const { Content } = Layout;
const LayoutIndex = (props: { name: string }) => {
	console.log(props);
	const { pathname } = useLocation();
	return (
		<Layout id="theLayOut">
			<TheSider />
			<Layout>
				<TheHeader />
				<TheTabs />
				<Content>
					<TransitionGroup className="container">
						{/* exit：表示退出当前页面的时候是否有动画 */}
						<CSSTransition key={pathname} timeout={200} classNames="fade" exit={false}>
							<Outlet></Outlet>
						</CSSTransition>
					</TransitionGroup>
				</Content>
				<TheFooter name="Ant Design ©2023 Created by Ant UED"></TheFooter>
			</Layout>
		</Layout>
	);
};

export default LayoutIndex;
