
function getEl(el) { //获取id
	return document.getElementById(el);
}

clientH = document.documentElement.clientHeight; //获取窗口大小
clientW = document.documentElement.clientWidth;

function center(id) {  //垂直居中
	
	getEl(id).style.display = "block";
	getEl(id).style.top = (clientH - getEl(id).offsetHeight) / 2 + "px";
	getEl(id).style.left = (clientW - getEl(id).offsetWidth) / 2 +"px";
}

function filter(id) {
	
	getEl(id).style.height = clientH + "px";
	getEl(id).style.width = clientW + "px";
}
getEl("sub-mb").onclick = function() {
	filter("filter");
	center("dialog-box");
}
