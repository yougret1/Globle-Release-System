/**
 * @description 获取需要展开的 subMenu
 * @param path 当前访问地址
 * @returns {Array} 需要展开的 subMenu
 */
export const getOpenKeys = (path: string) => {
	console.log("path is " + path);
	let newStr: string = "";
	let arr = path.split("/").map((val, index) => {
		if (index != 1) val = "/" + val;
		if (index != 0) val = newStr + val;
		newStr = val;
		return val;
	});
	arr.shift();
	return arr;
};
