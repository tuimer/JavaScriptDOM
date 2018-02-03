function showPic(whichPic){
	 var source=whichPic.getAttribute("href");
	 var placeholder=document.getElementById("placeholder");
	 placeholder.setAttribute("src",source); 
}
function countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);//节点的nodeType属性值：1——>元素节点
}								 //						 2——>属性节点
window.onload=countBodyChildren; //						 3——>文本节点
	

