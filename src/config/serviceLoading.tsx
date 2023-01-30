import Loading from "@/components/Loading";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
let needLoading: boolean = false;
/**
 *  显示loading
 * @returns {boolean} 当前显示状态
 */
export const showFullScreenLoading = (): boolean => {
	if (!needLoading) {
		needLoading = true;
		let dom = document.createElement("div");
		dom.setAttribute("id", "loading");
		document.body.appendChild(dom);
		ReactDOM.createRoot(dom).render(<Loading />);
	} else {
		console.log("已经处于加载中");
	}
	return needLoading;
};

export const tryHideFullScreenLoading = (): boolean => {
	if (needLoading) {
		document.body.removeChild(document.getElementById("loading") as HTMLElement);
	} else {
		console.log("并未加载");
	}
	return needLoading;
};
