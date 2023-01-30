import logo from "@/assets/images/logo.png";
import "./index.scss";
const Logo = () => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			<h2 className="logo-text">Yougret</h2>
		</div>
	);
};

export default Logo;
