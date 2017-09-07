/**
 * 获取tab信息（标题、背景色）
 * @param  {[type]} tab 'tab分类'
 * @param  {[type]} top '是否是置顶'
 * @param  {[type]} good '是否是精华'
 * @param  {Boolean} isClass '是否是样式类名'
 * @return {[type]} '返回对应的字符串'
 */
export const getTabInfo = (tab, good, top, isClass) => {
	let title = '';
	let className = '';

	if (top) {
		title = '置顶';
		className = 'top';
	} else if (good) {
		title = '精华';
		className = 'good';
	} else {
		switch (tab) {
			case 'share':
				title = '分享';
				className = 'share';
				break;
			case 'job':
				title = '招聘';
				className = 'job';
				break;
			case 'ask':
				title = '问答';
				className = 'ask';
				break;
			default:
				title = '暂无';
				className = 'none';
				break;
		}
	}

	return isClass ? className : title;
}

/**
 * 格式化时间
 * @param  {[type]} str 需要格式的时间字符串
 * @return {[type]} '返回格式化后的字符串'
 */
export const formateTime = (str) => {
	var date = new Date(str);

	//距现在的时间间隔(单位: 毫秒)
	var time = new Date().getTime() - date.getTime();

	if (time < 0) {
		return ''
	} else if (time / 1000 < 60) {
		return '刚刚';
	} else if ((time / 60000) < 60) {
		return parseInt((time / 60000)) + '分钟前';
	} else if ((time / 3600000) < 24) {
		return parseInt((time / 3600000)) + '小时前';
	} else if ((time / 86400000) < 30) {
		return parseInt((time / 86400000)) + '天前';
	}else if ((time / 2592000000) < 12) {
		return parseInt((time / 2592000000)) + '月前';
	} else {
		return parseInt((time / 31104000000)) + '年前';
	}
}

/**
 * @return {[type]} 返回视口高度
 */
export const getClientHeight = () => {
  return document.documentElement.clientHeight;
}

