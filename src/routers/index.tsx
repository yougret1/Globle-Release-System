import { useRoutes, Navigate, RouteObject } from "react-router-dom";
import Login from "@/views/login/index";
import LayoutIndex from "@/layouts/index";
import Home from "@/views/home/index";
import NotFind404 from "@/components/ErrorMessage/404";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		element: <LayoutIndex name="prop参数传递" />,
		children: [
			{
				path: "/home",
				element: <Home />
			}
		]
	},
	{
		path: "/*",
		element: <NotFind404 />
	}
];

const TheRouter = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};
export default TheRouter;
