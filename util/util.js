function getMonthStartAndEnd(AddMonthCount) {
	//起止日期数组
	var startStop = new Array();
	//获取当前时间
	var currentDate = new Date();
	var month = currentDate.getMonth() + AddMonthCount;
	if (month < 0) {
		var n = parseInt(-month / 12);
		month += n * 12;
		currentDate.setFullYear(currentDate.getFullYear() - n);
	}
	currentDate = new Date(currentDate.setMonth(month));
	//获得当前月份0-11
	var currentMonth = currentDate.getMonth();
	//获得当前年份4位年
	var currentYear = currentDate.getFullYear();
	//获得上一个月的第一天
	var currentMonthFirstDay = new Date(currentYear, currentMonth, 1);
	//获得上一月的最后一天
	var currentMonthLastDay = new Date(currentYear, currentMonth + 1, 0);
	//添加至数组
	startStop.push(getDateStr3(currentMonthFirstDay));
	startStop.push(getDateStr3(currentMonthLastDay));
	//返回
	return startStop;
}
//获取当前日期yy-mm-dd
//date 为时间对象
function getDateStr3(date) {
	var year = "";
	var month = "";
	var day = "";
	var now = date;
	year = "" + now.getFullYear();
	if (now.getMonth() + 1 < 10) {
		month = "0" + (now.getMonth() + 1);
	} else {
		month = "" + (now.getMonth() + 1);
	}
	if (now.getDate() < 10) {
		day = "0" + now.getDate();
	} else {
		day = "" + now.getDate();
	}
	return year + "-" + month + "-" + day;
}
function checkMobile(mobile) {
	if (!/^1[3|5|7|8][0-9]\d{4,8}$/.test(mobile)) {
		console.log("checkMobile");
		uni.showToast({
			title: "请输入正确的手机号",
			duration: 1000,
			icon: "none",
		});
		return false;
	} else {
		return true;
	}
}
function getNowTime() {
	let dateTime;
	let yy = new Date().getFullYear();
	let mm = new Date().getMonth() + 1;
	let dd = new Date().getDate();
	let hh = new Date().getHours();
	let mf = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
	let ss = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();
	dateTime = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
	console.log(dateTime);
	return dateTime;
}
module.exports = {
	getMonthStartAndEnd: getMonthStartAndEnd,
	getDateStr3: getDateStr3,
	checkMobile: checkMobile,
	getNowTime: getNowTime,
};
