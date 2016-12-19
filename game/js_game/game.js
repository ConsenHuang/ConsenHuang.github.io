var elements = {
	music:document.getElementById("music"),
	musicbox:document.getElementById("musicbox"),
	musicOff:true,
	pop:document.getElementById("pop"),
//	游戏开始时候的点击开始按钮
	begin_game_buttom:document.getElementById("begin_game_buttom"),
//	gameover时候的回到开始页面按钮
	bac_to_begin:document.getElementById("bac_to_begin"),
//	再来一局按钮
	another:document.getElementById("another"),
//	游戏结束时候的弹层
	pop2:document.getElementById("pop2"),
//	游戏结束时候的关数
	ending_guan_shu:document.getElementById("ending_guan_shu"),
//	游戏结束时候,杀死的怪物数量
	ending_num_monsters:document.getElementById("ending_num_monsters"),
//	进度条
	inner_jindu:document.querySelector("#inner_jindu"),
//	装进度条的box
	jindu_box:document.querySelector("#jindu_box"),
//	图片库
	imgs:[
		"img_game/begin_game.png",
		"img_game/manster1.png",
		"img_game/manster1d.png",
		"img_game/manster2.png",
		"img_game/manster2d.png",
		"img_game/manster3.png",
		"img_game/manster3d.png",
		"img_game/manster4.png",
		"img_game/manster4d.png",
		"img_game/time_ico.png",
		"img/musicplay.png",
		"img/musicstop.png",
		"img/up_ico.png"
	]
}

//初始化进度条
function _load(){
		var n = 0;
		for (var i = 0; i < elements.imgs.length; i++) {
			var img = document.createElement("img");
			img.src = elements.imgs[i];
			img.onload = function(){
				n++;
				elements.inner_jindu.style.width =(parseInt((n/elements.imgs.length)*100)) + "%";
				if(n==elements.imgs.length){
					elements.jindu_box.style.display = "none";
					//初始化,当图片加载完成了的时候,让游戏说明弹出来
					setTimeout(function(){
						elements.pop.style.top = (document.documentElement.clientHeight/2  -  parseInt(getComputedStyle(pop).height) ) + "px";
					},500)
				}
			}
		
		}
}

_load();

//初始化音乐
elements.music.addEventListener('touchstart',function(e){
//	阻止冒泡
	e.stopPropagation();
//	按下之后,对音乐开关取反
	if(elements.musicOff==true){
		elements.musicOff = false;
	}
	else{
		elements.musicOff = true;
	}
	if(elements.musicOff ==false){
		elements.musicbox.pause();
		tool.removeClassName(elements.music,"play");
		tool.addClassName(elements.music,"stop");
	}
	else if(elements.musicOff ==true){
		elements.musicbox.play();
		tool.removeClassName(elements.music,"stop");
		tool.addClassName(elements.music,"play");
	}
})
//初始化画布 
monGame();

//获取整个页面
page_game = document.querySelector("#page_game");

//获取画布
var can = document.querySelector("#can");

//获当前杀来了多少只小怪的id
var num_monster_2 = document.getElementsByClassName("num_monster_2")[0];
//当前杀死多少只小怪
var current_num = 0;
//num_rest_time是剩余时间数量
var num_rest_time = document.getElementsByClassName("num_rest_time")[0];
//当前剩余时间
var current_time = 10;
//获取第几关
var num_customs = document.getElementsByClassName("num_customs")[0];


//初始化关数1
var passNum = -1;

//初始化第一关怪物数量
var Num = 1;
//总共299关,arrNum[]里 的每一个数对应每一关的怪物数量分别为1,2,2,3,3,3,4,4,4,4,5,5,5,5,5....
var arrNum = [];
//用来存放生成的怪物
var mons =[];

//容错处理,看看用户可以接受多少的容错
var rong_cuo = 10;
//初始化画布
function monGame(){
	var footH = document.querySelectorAll(".foot")[0].style.height;
	var can = document.querySelector("#can");
	can.width = document.documentElement.clientWidth;
	can.height = document.documentElement.clientHeight;
//	初始化第一关怪物的数量
}	
//关数:
//1,2,2,3,3,3,4,4,4,4...f
//设置关数函数
function creatNum(){
		for (var i = 0; i <Num; i++) {
			arrNum.push(Num);
		}
		Num++;
//		设置100关
		if(Num<100){
			creatNum();
		}
}
//创建关数
creatNum();
//console.log(Num);
//console.log(arrNum);
//创建小怪物在画布上面
//创建第一只小怪物	传入的参数:{type:1,canvasId:"can",id:new Date(),x:50,y:50,w:108,y:113}
//怪物类
function Monster(_option){
//		type是怪物的类型	
		this._option = _option;
		this._type = tool.getRandom(1,4);
//		x,y对应怪物生成时候的的圆心位置
		this.x = null;
		this.y = null;
		
		
//		用来存储创建出来之后,这个小怪物的一些属性:id,当前运动的位置,是哪一张图片等
		this._obj = {};
		
		var can = document.querySelector("#"+_option.canvasId);
//		记录下怪物的id值,在后面的时候要用到
		this._id = null;
		
		this.max_x = can.width - 100;
		this.min_x = 50;
		this.max_y = can.height - 200;
		this.min_y = 50;
		
		this.imgType = {};
		this.imgDeathType = {};
		
//		怪物的行走路程以及运动份数
		this.distance = ( (this.max_x - this.min_x) + (this.max_y - this.min_x) ) * 2;
		
//		怪物走一圈的时间，关数增加，速度加快
		this.roundT = 80000;
		this.speed = 18;
		this.change1 = 3;
		this.change = null;
		if(this._option.clockWise){
			this.change = this.distance/(this.roundT/this.speed );
		}
		else{
			this.change = (-1)* this.distance/(this.roundT/this.speed );
		}
		
//		 怪物运动的半径
		this.R = this._option.R||300;
		this.angle = this._option.angle||30;
		this.angleChange = this._option.angleChange||1;
		
//		side表示怪物在哪一条边上面生成 
		this.side = tool.getRandom(1,4);
//		不同类型,对应不同四张小怪的图片大小
		if(this._type==1){
			this.imgType.w = 108;
			this.imgType.h = 113;
			this.imgDeathType.w = 180;
			this.imgDeathType.h = 138;
		}
		else if(this._type==2){
			this.imgType.w = 109;
			this.imgType.h = 112;
			this.imgDeathType.w = 146;
			this.imgDeathType.h = 80;
		}
		else if(this._type==3){
			this.imgType.w = 107;
			this.imgType.h = 129;
			this.imgDeathType.w = 103;
			this.imgDeathType.h = 96;
		}
		else if(this._type==4){
			this.imgType.w = 127;
			this.imgType.h = 110;
			this.imgDeathType.w = 92;
			this.imgDeathType.h = 108;
		}
//		把小怪物的圆心初始化
		this.beginPosition();
//		小怪物画到画布上面去
		this.drawMonster();
		var _that = this;
//		让像怪物运动起来
		this.timer1 = setInterval(function(){
			_that.Run();
		},_that.speed)
		
//		console.log(this);
//		setTimeout(function(){
//			_that.death();
//		},2000)
}

//		小怪物画到画布上面去的方法
Monster.prototype.drawMonster = function(){
			this._id = "m"+ parseInt(this._type + this.imgType.w + this.imgType.h + this.x +this.y +tool.getRandom(1,10000)) ;
	    	var img=new Image();
	    	img.src="img_game/manster"+this._type+".png";
	    	var _that = this;
				img.onload=function(){
				    jc.start(_that._option.canvasId,60);
				    var behin_x = null;
				    var begin_y = null;
//				    将小怪进入画布的位置调出去,避免卡顿画面
					if(_that.x==50){
						behin_x = -2000;
					}
					if(_that.x==can.width - 100){
						begin_y = 2000;
					}
					if(_that.y = 50){
						begin_y = -2000;
					}
					if(_that.y==can.height - 100){
						begin_y = can.height + 2000;
					}
				    
//				    jc.image(img,_that.x,_that.y,_that.imgType.w,_that.imgType.h).id(_that._id);
				    jc.image(img,behin_x,begin_y,_that.imgType.w,_that.imgType.h).id(_that._id);
								   
//				   console.log(_that.x,_that.y);
				    jc.start(_that._option.canvasId,60);
				    jc("#" + _that._id).fadeIn(500);
				    _that._img = jc("#"+_that._id);
//				    console.log(jc("#"+_that._id))
				}
}
//		生成小怪的位置
Monster.prototype.beginPosition = function(){
			switch(this.side){
				case 1:
					this.x = tool.getRandom(this.min_x,this.max_x);
					this.y = this.min_y;
					this.angle = tool.getRandom(250,280);
					break;
				case 2:
					this.x = this.min_x;
					this.y = tool.getRandom(this.min_y,this.max_y);
					this.angle = tool.getRandom(160,190);
					break;
				case 3:
					this.x = tool.getRandom(this.min_x,this.max_x);
					this.y = this.min_y;
					this.angle = tool.getRandom(60,120);
					break;
				case 4:
					this.x = tool.getRandom(this.min_x,this.max_x);
					this.y = this.min_y;
					this.angle = tool.getRandom(-30,30);
					break;
			}
//			console.log("beginPosition"+"运行了");
//			
//			console.log(this.x,this.y)
}
//		小怪的运动轨迹
Monster.prototype.Run = function(){
//			第一条线上面走的时候
			if(this.x <= this.max_x&& this.y==this.min_y){
				this.x -= this.change1;
				if(this.x < this.min_x){
					this.x = this.min_x;
				}
			}
//			第二条线
			if(this.x==this.min_x && this.y < this.max_y){
				
				this.y += this.change1;
				
				if(this.y>this.max_y){
					this.y = this.max_y;
				}
			}
//			第三条线
			if(this.x <this.max_x && this.y==this.max_y){
				this.x += this.change1;
				if(this.x > this.max_x){
					this.x = this.max_x;
				}
			}
//			第四条线
			if(this.x==this.max_x && this.y <= this.max_y){
				this.y -= this.change1;
				if(this.y < this.min_y){
					this.y = this.min_y;
				}
			}
			var _that = this;
			this.angle += this.change * 3/(180/Math.PI);
			var real_x = this.x + this.R* Math.cos(_that.angle);
			var real_y = this.y + this.R* Math.sin(_that.angle);
			
			setTimeout(function(){
				jc("#"+_that._id).animate({x:real_x,y:real_y},1);
			},50)
//			console.log("Run"+"运行了");
//console.log(_that._id)
			
}
//根据关数,将怪物生成到画布上面去
function Out(){
	for (var i = 0; i < mons.length; i++) {
		jc("#"+mons[i]._id).clear();
	}
	
}
//小怪死亡函数
Monster.prototype.death = function(){
//	清除掉自身的这个定时器
	clearInterval(this.timer1);
	var _that = this;
	var img=new Image();
	img.src="img_game/manster"+this._type+"d.png";
	
		img.onload=function(){
		    jc.start(_that._option.canvasId,60);
		    jc.image(img,_that._img._x,_that._img._y,_that.imgDeathType.w,_that.imgDeathType.h).id("d"+_that._id);
		    jc.start(_that._option.canvasId,60);
//		    让死了的那只小怪淡淡消失
		    setTimeout(function(){
		    	jc("#d"+_that._id).fadeOut(1600);
			},200)
		}
		
////		让小怪消失掉
//		setTimeout(function(){
//			
//		},10)
////		console.log(mons);
}	

//给画布一个按下事件
var can =document.querySelector("#can");
//给画布加入手指滑动事件（待用）
can.addEventListener("touchmove",function(e){
	e.preventDefault();
	var e = e||event;
//		var x = e.changedTouches[0].pageX;
//	 	var y = e.changedTouches[0].pageY;
//	    jc.start("can");
//	    jc.circle(x,y,10);      
//	    jc.start("can");
	
//	console.log(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
	
//	if(e.changedTouches[0].pageX>=)
});
//给画布加入点击事件
can.addEventListener("touchstart",function(e){
//	n用来判断是有小怪被点中
	var n = 0;
	e.stopPropagation();
	e.preventDefault();
	var e = e||event;
	var user_x = e.changedTouches[0].pageX;
	var user_y = e.changedTouches[0].pageY;
	for (var i = 0; i < mons.length; i++) {
//		获取mons里面的第i个在画布中的位置:_x,_y,用来与当前用户点击时候的手指所在位置
		var mons_i_x =  parseInt(jc("#"+mons[i]._id)._x);
		var mons_i_y =  parseInt(jc("#"+mons[i]._id)._y);
		var mons_i_w =  jc("#"+mons[i]._id)._swidth ;
		var mons_i_h =  jc("#"+mons[i]._id)._sheight ;
		if( user_x >= mons_i_x - rong_cuo && user_x <= (mons_i_x + mons_i_w + rong_cuo) && user_y >= mons_i_y - rong_cuo&& user_y <= (mons_i_y +mons_i_h + rong_cuo)){
			
//			将杀死怪物数量更新
			current_num++;
//			加一秒钟
			current_time++;
			n++;
			num_monster_2.innerHTML = current_num;
			
			mons[i].death();
			jc("#"+mons[i]._id).del();
			mons.splice(i,1);
			i--;
		}
		
	}
//	让屏幕震动
	if(n==0){
		tool.addClassName(page_game,"shake");
	}
	
})
//手指抬起时候事件
can.addEventListener("touchend",function(e){
	setTimeout(function(){
		tool.removeClassName(page_game,"shake");
	},150)
		
})

//进入下一关
function Next(){
//	修改时间
//	can.style.display = "block";
	current_time = 10;
	num_rest_time.innerHTML = current_time;
//	修改杀死的怪物数量
//	current_num = 0;
//	num_monster_2.innerHTML = current_num;
//	清空存储小怪的数组

	
	mons = [];
	//	清掉画布
//	var _stx = can.getContext("2d");
//	_stx.clearRect(0,0,can.width,can.height);
	
	
	num_customs.innerHTML = "第"+(passNum+1)+"关";
	setTimeout(function(){
		for (var i = 0; i < arrNum[passNum]; i++) {
			var clockWise = true;
			var R = tool.getRandom(300,600);
			if(i%2){clockWise = false};
			mons[i] = new Monster({"canvasId":"can","clockWise":clockWise,R:tool.getRandom(260,400),angle:tool.getRandom(1,300),angleChange:1});
		}
	},500)
//	console.log(mons);
}
//for (var i = 0; i < 40; i++) {
//	mons[i] = new Monster({"canvasId":"can","clockWise":tool.getRandom(0,1),R:tool.getRandom(200,400),angle:tool.getRandom(1,300),angleChange:tool.getRandom(1,3)});
//
//}

//每1000毫秒检测一次是否进入下一关
var canNext = null;


function init(){
//	初始化
	mons = [];
	current_time = 10;
	passNum = -1;
	
	canNext = setInterval(function(){
		
		current_time--;
		num_rest_time.innerHTML = current_time;
		if(mons.length==0){
	//		关数加1.进入下一关
			passNum++;
			Next();
		}
		if(current_time<=0){
			for (var i = 0; i < mons.length; i++) {
				jc("#"+mons[i]._id).del();
			}
			mons = [];
//			结束界面弹出来
			elements.pop2.style.top = (document.documentElement.clientHeight/2 - parseInt(getComputedStyle(elements.pop2).height)/2) + "px"; 
//			设置结束关数
			elements.ending_guan_shu.innerHTML = passNum + 1;
//			杀死怪物的数量
			elements.ending_num_monsters.innerHTML = current_num;
			clearInterval(canNext);
			
		}
	},1000)
}
//console.log(parseInt(getComputedStyle(elements.pop2).height)/2) ;



//点击开始游戏
elements.begin_game_buttom.addEventListener("touchstart",function(e){
	e.stopPropagation();
	elements.begin_game_buttom.style.animation = "beginGame 1s";
	setTimeout(function(){
		elements.begin_game_buttom.style.animation = "";
	},1500);
	elements.pop.style.top = (-1*document.documentElement.clientHeight) + "px"
	//执行函数,开启游戏
	init();
});
//
//点击回到开始界面
elements.bac_to_begin.addEventListener("touchstart",function(e){
	e.stopPropagation();
	elements.pop2.style.top = (-1* document.documentElement.heigth) + "px";
	window.location.href = "../index.html";
})

//点击再来一局
elements.another.addEventListener("touchstart",function(e){
	e.stopPropagation();
	elements.pop2.style.top = (-1*document.documentElement.clientHeight) + "px"
	console.log(elements.pop2.style.top);
	init();
})