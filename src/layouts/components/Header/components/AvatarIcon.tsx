import { Avatar } from "antd";
import avatar from "@/assets/images/avatar.png";

const AvatarIcon = () => {
	return (
		<div className="avatarIcon">
			<div className="username">username</div>
			<Avatar src={avatar} />
		</div>
	);
};

export default AvatarIcon;
