/*
* @Author: lisheng
* @Date:   2018-06-13 15:50:10
* @Last Modified by:   lisheng
* @Last Modified time: 2018-06-13 16:30:02
*/
/*
* @Author: lisheng
* @Date:   2018-06-08 11:52:03
* @Last Modified by:   lisheng
* @Last Modified time: 2018-06-13 08:51:13
*/
window.onload=function(){
	
	let banner=document.querySelector(".banner");
	let lis=document.querySelectorAll(".banner li");
	let btn=document.querySelectorAll(".btn div");
	let index=0;
	lis[0].style.zIndex=10;
	btn[0].className="hot";
	let t=setInterval(move,2000);

	for(let l=0;l<btn.length;l++){
		btn[l].onclick=function(){
			lis.forEach(function(elements){
			elements.style.zIndex=5;
		})
			btn.forEach(function(elements){
			elements.className="";
		})
			lis[l].style.zIndex=20;
			btn[l].className="hot";
			index=l;
		}
	}
	// anniuz.onclick=function(){
	// 	movel();
	// }
	// anniuy.onclick=function(){
	// 	move();
	// }
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		lis.forEach(function(elements,index,obj){
			elements.style.zIndex=5;
		})
		btn.forEach(function(elements,index,obj){
			elements.className="";
		})
		lis[index].style.zIndex=10;
		btn[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		lis.forEach(function(elements,index,obj){
			elements.style.zIndex=5;
		})
		btn.forEach(function(elements,index,obj){
			elements.className="";
		})
		lis[index].style.zIndex=10;
		btn[index].className="hot";
	}
}