window.onload=function(){
	var cover=document.getElementsByClassName('cover')[0];
	var contenta=document.getElementsByClassName('content1')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>180){
			cover.style.position='fixed'
			contenta.style.marginTop=171+'px'
			
		}else{
			cover.style.position='static'
			contenta.style.marginTop=0+'px'
			
		}
	}
}
function change(){
	var money1=document.getElementById('money1')
	var money2=document.getElementById('money2')
	money2.innerHTML='¥'+' '+money1.value
}
function animate(obj,json,callback){
	clearInterval(obj.timers)//每次运行前清除之前的计数器
	obj.timers=setInterval(
		function(){
			var isStop=true;
			for(var attr in json){
				if(attr=='opacity'){
					var now=parseInt(getStyle(obj,attr)*100);
				}else{
					var now=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-now)/5;//透明度
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
	     		if(attr=='opacity'){
	     			obj.style[attr]=(now+speed)/100;
	     		}else{
	            	obj.style[attr]=now+speed+'px';
	            }
	            var current=now+speed;
	            if(json[attr]!=current){
	               	isStop=false;
	            }
            }
            if(isStop){
                clearInterval(obj.timers);
              	callback&&callback();
            }
	},20);//速度影响效果
}
function getStyle(obj,style){
	if(getComputedStyle(obj)){
		return getComputedStyle(obj)[style];
	}else{
		obj.currentStyle[style];
	}
}
