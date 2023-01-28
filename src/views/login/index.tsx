import { Button, message } from "antd";
const Login = () => {
	return (
		<Button
			type="primary"
			onClick={() => {
				message.success("登录成功");
			}}
		>
			Primary Button
		</Button>
	);
};
export default Login;
