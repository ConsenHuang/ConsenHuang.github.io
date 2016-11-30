
//业务操作
window.onload = function(){
	
//	刚加载进来的时候,初始化 
//	初始化页面宽度,使得它适应屏幕宽度
	document.querySelector("body").style.width = document.documentElement.clientWidth;
	document.querySelector("body").style.overflow = "hidden";

//	设置左边nav的高度为页面高度
	left_nav.nav.style.height = (document.documentElement.clientHeight - 48) + "px";
	
//	初始化文件区的高度
	content.part_file.style.height = (document.documentElement.clientHeight - 257)+"px";
	

	if(!window.location.hash ){
	window.location.hash = 0;
}

//页面刷新时候,不改变页面变成初始的渲染效果
//	 console.log(globleFn.findAllLi()); 
window.onhashchange = function(){
	if(window.location.hash.substring(1)==-1){
		return;
	}else{
		globleFn.onHashChange();
	}
}

//解决刷新了之后,li消失问题,解决:每次刷新,重新拿数据渲染页面
globleFn.onHashChange();
//刷新时候的操作



//	新建文件夹
	$("#d2").on("click",function(e){
		content.nameagin = false;
		document.getElementById("ccc").className = "";
//		如果content.canNew为真,则可以new新的文件
//		否则,直到用户输入完成,才可以继续new文件夹
		if(content.canNew==true){
			globleFn.newFilm("j");
		}
		else{
//			如果在创建期间人还没有确定文件名字,那么,不允许用户再次创建
			var num = globleFn.findAllLi().length;
			$("#main_ul li").eq(num-1).find(".btn2").focus();
			$("#main_ul li").eq(num-1).find(".btn2").select();
		}
		content.canNew = false;
//		大清洗
		globleFn.bigWash();
		
	})
//	全选的时候
	content.btn_checkedAll.onclick = function(){
		content.checkedAll =!content.checkedAll;
		tool.checkAll();
	};
//	li 进行hover时候的效果
//	li的里面的span hover时候的效果

//	 删除效果
	$("#d5").on("click",function(e){
//		弹出框
//		如果一个都没有选中,那么显示请选择文件
		var lis = document.getElementsByTagName("li");
		
		var n = 0;
		for (var i = 0; i < lis.length; i++) {
			
			if(lis[i].onoff){
				n++;
			}
			
		}
		if(n==0){
			alert("请选择需要删除的文件");
			return;
		}
		
		
		$("#warming").css({
			"animation": "warm 1.5s",
			"animation-fill-mode":"forwards"
		})
//		要改变#warming的top值
		$("#warming").on("webkitAnimationEnd",function(){
			$("#warming").css({
				top:"300px"
			})
		})
	})
//	删除的yes点击时候的效果
	$(".confirm_yes").eq(0).on("click",function(e){
		globleFn._delete();
		globleFn.back_top();
		setTimeout(function(){
            globleFn.cue("删除成功");
		},1000)

	})
//	删除的no点击的时候
	$(".confirm_no").eq(0).on("click",function(){
        globleFn.back_top();
        setTimeout(function(){
            globleFn.cue("删除失败");
        },1000)
	});


//	console.log(data)
	
	
//	移动到点击时候的效果

	$("#d3").on("click",function(){
		
		
		var lis = globleFn.findAllLi();
		var n=0;
		for (var i = 0; i < lis.length; i++) {
			if(lis[i].onoff){
				n++;
			}
		}
		if(n==0){
			alert("请选择所需要移动的文件");
			return;
		}
		$(".small_ul").css({
			"animation": "small_ul_go 1.5s",
			"animation-fill-mode":"forwards"
		})
//		改变top值
		$(".small_ul").on("webkitAnimationEnd",function(){
			$(".small_ul").css({
				top:"400px"
			})
		})
		globleFn.creatSmallLi();
	})
	
//	移动到的yes点击时候的效果
	
	$("._confirm_yes").on("click",function(){
		
//		检查一下用户是否有选中
		
		
		
		
		var small_lis = document.querySelectorAll(".real_small_ul li");
//		now_id用来记录所点击的那一个li在data中所对应的id编号
		var now_id = null;
//		获取页面中所有的li 
		var lis = globleFn.findAllLi();
		
//		拿到now_id的值
		for (var i = 0; i < small_lis.length; i++) {
				if(small_lis[i].onoff){
					now_id=small_lis[i]._id;
				}
		}
		
//		将页面中所选中的li"放入"到now_id对应的文件夹当中去
		for (var i = 0; i < lis.length; i++) {
			if(lis[i].onoff){
//				便利data里面的元素,将对应的pid改掉
				for (var j = 0; j < data.length; j++) {
//					当data里面的id等于页面所选中的li所对应的id时候
					if(data[j].id==lis[i].id){
//						修改pid的值
						data[j].pid = now_id;
					}
				}
				
			}
			
		}
//		修改完了之后
//		重新渲染页面
		globleFn.makepage();
//		回弹
		$(".small_ul").css({
			"animation": "small_ul_go_back 1.5s",
			
		})
		$(".small_ul").on("webkitAnimationEnd",function(){
			$(this).css({
				top:"-1000px"
			})
		})
		setTimeout(function(){
			globleFn.cue("移动文件成功")
		},1000)
	})
	
//	移动到的no点击时候的效果
	$(".quxiao_small_lis").on("click",function(){
		$(".small_ul").css({
			"animation": "small_ul_go_back 1.5s",
			
		})
		$(".small_ul").on("webkitAnimationEnd",function(){
			$(this).css({
				top:"-1000px"
			})
		})
        setTimeout(function(){
            globleFn.cue("移动文件失败")
        },1000)
	})
//	叉叉被点击的时候
	$(".cha_cha").on("click",function(){
		$(".small_ul").css({
			"animation": "small_ul_go_back 1.5s",
			
		})
		$(".small_ul").on("webkitAnimationEnd",function(){
			$(this).css({
				top:"-1000px"
			})
		})
        setTimeout(function(){
            globleFn.cue("移动文件失败")
        },1000)
	})
//	重命名被点击时候的效果
	$("#d4").on("click",function(){
		content.nameagin = true;
		globleFn.nameagin();
	})
//	搜索被点击的时候
	$(".inp_sousuo1").on("click",function(){
		globleFn.searchFile();
		
	})
//	搜索框被按下Enter的时候
	$(".inp_sousuo").keydown(function(e){
		if(e.keyCode==13){
			globleFn.searchFile();
		}
 			
	});
//	画框框多选
	content.contentAll.onmousedown=function(e){
		e.stopPropagation();
		e.cancelBubble = true;
		e.preventDefault();
//		globleFn.bigWash();
		var div = document.createElement("div");
		var b_x = e.clientX;
		var b_y = e.clientY;
		$(div).css({
			"border":"3px solid black",
			"background":"blue",
			"opacity":"0.2",
			"position": "absolute",
			"border-radius": "10px"
		});
		this.appendChild(div);
		document.onmousemove=function(e){
			globleFn.crack(div);
			e.preventDefault();
			var fin_x = Math.abs(e.clientX-b_x) + "px";
			var fin_y = Math.abs(e.clientY-b_y) + "px";
			var fin_l = (Math.min(b_x,e.clientX))  + "px";
			var fin_t = Math.min(b_y,e.clientY) + "px";
			$(div).css({
				width:fin_x,
				height:fin_y,
				top:fin_t,
				left:fin_l
			})
			globleFn.allOk();
		}
		document.onmouseup = function(){
			 
			content.contentAll.removeChild(div);
			document.onmouseup = document.onmousemove  =null;
		}
	}
	
//	全部文件显示
	$("#all_load").on("click",function(){
		$("#main_ul").html("");
		var is_new = false;
		for (var i = 0; i < data.length; i++) {
			globleFn.creatLi(data[i],is_new);
		 }
		
	})
}
