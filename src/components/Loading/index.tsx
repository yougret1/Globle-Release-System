import React from "react";
import { Spin } from "antd";
import "./index.scss";

const App: React.FC = () => (
	<Spin tip="Loading" size="large">
		<div className="content" />
	</Spin>
);

export default App;
