import { useRoutes, Navigate, RouteObject } from "react-router-dom";
import Login from "@/views/login/index";
import LayoutIndex from "@/layouts/index";
import Home from "@/views/home/index";
import NotFind404 from "@/components/ErrorMessage/404";
import DataScreen from "@/views/dataScreen/index";
import UseHooks from "@/views/proTable/useHooks/index";
import UseComponent from "@/views/proTable/useComponent/index";
import DataVisualize from "@/views/dashboard/dataVisualize";
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
			},
			{
				path: "/dataScreen",
				element: <DataScreen />
			},
			{
				path: "/proTable/useHooks",
				element: <UseHooks />
			},
			{
				path: "/proTable/useComponent",
				element: <UseComponent />
			},
			{
				path: "/dashboard/dataVisualize",
				element: <DataVisualize />
			},
			{
				path: "/*",
				element: <NotFind404 />
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
