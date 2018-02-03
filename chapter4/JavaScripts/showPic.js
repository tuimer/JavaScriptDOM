function showPic(whichPic){
	 var source=whichPic.getAttribute("href");
	 var placeholder=document.getElementById("placeholder");
	 placeholder.setAttribute("src",source); //设置图片变换
	 var text=whichPic.getAttribute("title");//点击图片时，链接的title属性值提取并保留到text
	 var description=document.getElementById("description");//id为description的<p>元素保留在description的变量里
	 description.firstChild.nodeValue=text;//firstChild等价于childNodes[0]
}
function countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);//节点的nodeType属性值：1——>元素节点
}								 //						 2——>属性节点
window.onload=countBodyChildren; //						 3——>文本节点
	

