//左边nav的元素集合
var left_nav = {
	
	nav:document.querySelector("#nav_left")
	
	
}





//工具栏下的按键和区域对象的集合
var content = {
	// 判断是否为重命名还是生成
	nameagin:false,
	
	sea:window.location.search,
	
	has :window.location.has,
	part_file:document.getElementById("part_file"),
	//	文件夹区域
	contentAll : document.getElementById("content"),
	
//	新建文件夹按钮
	btn_NewFile : document.querySelector("#content #d2"),
	
//	删除文件按钮
	btn_delFilm : document.querySelector("#content #d5"),
	
//	全选按钮
	btn_checkedAll : document.querySelector("#ccc"),
	
	main_ul:document.querySelector("#main_ul"),
	
	
	
//	点击选中后出现的显示/隐藏的功能区域
	partTool :  document.querySelector("#content #appear_btn"),
	
	
	
//	视图的状态:true为大视图,false为小视图
	onoff_img_b_and_s : true,
	
	checkedAll: false,
	
	canNew:true,
	warming:document.querySelector("#warming")
	
}

//根据传入的pid生成数据中对应数据 

//点击生成文件夹，并且将数据放入data中


//需要在全局中使用的函数

var globleFn = {

	// 提示更改函数
    cue: function cue(massage){
        $(".cue") .eq(0).html(massage);
        $(".cue") .eq(0).css({
            "animation":"cue_go 2s"
		});
        document.getElementsByClassName('cue')[0].addEventListener("webkitAnimationEnd", function(){
            $(".cue") .eq(0).css({
                "animation":"none"
            });
		});
	},
//	新建文件夹功能函数
    newFilm : function newFilm(is_new){
				
				content.btn_checkedAll.checked=false;
				
				var num = data.length + 1;
				
				var has = window.location.hash;
				
				var obj = {
					"name":"新建文件夹("+num+")",
					"id":num,
					"pid":has.substring(1)
				}
//				将生成的东西加入到data中进行同步
				data.unshift(obj);
				globleFn.creatLi(obj,is_new);
    },
    
    //生成li函数
    creatLi :  function creatLi(obj,is_new){
	
				
				var new_li = document.createElement('li');
				
				new_li.style.border = "2px solid transparent";
				
				new_li.id = obj.id;
				
//				这个onoff用来标记是否被选中
				new_li.onoff = false;
				
//				这个box用来存放重命名的按钮
				var box = document.createElement('div');
				box.className = "box_new_li";
				
			    var new_span = document.createElement('span');
			    
//			    重命名的输入框
			    var new_input2 = document.createElement('input');
			    
			    new_input2.type = 'text';
			    
			    
//			    这个是命名之后的那个p
				
			    var p_content = document.createElement('p');
			    
			    if(is_new){
			    	p_content.style.display = "none";
			    }
			    else{
			    	p_content.style.display = "block";
			    }
			    
			  	p_content.innerHTML = obj.name;
			    
//			    input3是 yes
			    var new_input3 = document.createElement('input');
			    
			    
			    new_input3.type = 'button';
			    
			    
//			    input4是no
			    var new_input4 = document.createElement('input');
			    
			    
			    new_input4.type = 'button';
			    
//				这个choos_box功能:选中时候,出现的遮罩层		    
			    var choos_box = document.createElement('div');
				
//				把重新命名的三个元素放到box里面
				if(is_new){
				    	new_input2.value = "新建文件夹";
			    }
				box.appendChild(new_input2);
				box.appendChild(new_input3);
				box.appendChild(new_input4);
				
				new_li.appendChild(box);
				new_li.appendChild(choos_box);
				new_li.appendChild(new_span);
				new_li.appendChild(p_content);
				
				
				
//				为大视图的时候,各个input的类
				if(content.onoff_img_b_and_s){
					choos_box.className = "div_choose";
					new_li.className = "mew_class_of_li_old class_one";
					p_content.className = "new_p";
					new_span.className = 'No_chedked';
					new_input2.className = 'btn2';
					new_input3.className = 'btn3';
					new_input4.className = 'btn4';
				}
				else if(!content.onoff_img_b_and_s){
					choos_box.className = "div_choose";
					new_li.className = "class_tow";
					p_content.className = "new_p_small";
					new_span.className = 'btn1_small';
					new_input2.className = 'btn2_small';
					new_input3.className = 'btn3_small';
					new_input4.className = 'btn4_small';
				}
				
//				box的作用是盛装三个重命名功能的选框
				if(is_new){
					box.style.display = "block";
					
				}else{
					box.style.display = "none";
				}
				
				
				main_ul.appendChild(new_li);
				
//				自身被点击的时候,出现被选中状态
				new_li.onclick = function(e){
					e.stopPropagation();
					e.cancelBubble = true;
					e.preventDefault();
//					如果e.ctrlKey复选没有按下时候出发的事件
					if(!e.ctrlKey){
//						如果所选中的这个li没有被选中
						if(this.onoff==false){
//							大清洗
							globleFn.bigWash();
//							自身开关取反
							this.onoff=true;
							this.style.borderColor = "blue";
							$(this).find("span").css({
								"display":"block"
							})
							// $(this).find("span").removeClass();
							$(this).find("span").addClass("is_checked");
//							console.log(this.onoff);
						}
						else{
//							如果当前开关为真,直接大清洗
							globleFn.bigWash();
						}
					}
//					当e.ctrl按下的时候
					if(e.ctrlKey){
						
						if(this.onoff==false){
							this.onoff=true;
							this.style.borderColor = "blue";
							$(this).find("span").css({
								"display":"block"
							})
							$(this).find("span").removeClass();
							$(this).find("span").addClass("is_checked");
						}
						else{
							this.onoff=false;
							this.style.borderColor = "transparent";
							$(this).find("span").css({
								"display":"none"
							})
							$(this).find("span").removeClass();
							$(this).find("span").addClass("_is_checked");
						}
					}
//					检测是否全选
					globleFn.allOk();
				}
//				自身被双击的时候
				new_li.ondblclick = function(e){
					e.stopPropagation();
					$("#main_ul").html("");
					is_new = false;
					window.location.hash = new_li.id;
					var hash = window.location.hash.substr(1);
					for (var i = 0; i < data.length; i++) {
						if(data[i].pid == hash){
							creatLi(data[i],is_new)
						}
					}
					
				}
				
				new_li.style.opacity = 0;
				
				new_li.style.transition = ".5s";
				
				setTimeout(function(){
					new_li.style.opacity = 1;
					new_input2.focus();
					new_input2.select();
				},50)
				
				
				
				new_input2.onclick = function(e){
					e.stopPropagation();
				}
//				yes被点击时候/yes被回车的时候的效果
				
				var nameIt = function(e,yes){
					// 弹出成功提示


					e.stopPropagation();
					if(e.keyCode==13||yes==="yes"){
						
						if(new_input2.value==""){
						
						p_content.style.display = "block";
					}
					else{
						p_content.innerHTML = new_input2.value;
						
						box.style.display = "none";
						
						obj.name = new_input2.value;
						
						p_content.style.display = "block";
					}
//					让此时可以new了
					content.canNew = true;
					}
					
				
				}
				new_input3.onclick = function(e){
                    if(content.nameagin){
                        globleFn.cue("重命名成功");
                    }
                    else{
                        globleFn.cue("生成文件成功");
					}
					nameIt(e,"yes");
				};
				new_input2.onkeydown = function(e){

					if(e.keyCode==13){
						nameIt(e,"yes");
                        if(content.nameagin){
                            globleFn.cue("重命名成功");
                        }
                        else{
                            globleFn.cue("生成文件成功");
                        }
					}
					
				};
//				no被点击时候的效果,出现遮罩层，提示用户是否使用默认命名
				new_input4.onclick = function(e){

                    if(content.nameagin){
                        globleFn.cue("重命名失败");
                    }
                    else{
                        globleFn.cue("生成文件成功");
                    }
					box.style.display = "none";
					e.stopPropagation();
					p_content.style.display = "block";
					content.canNew = true;
				}
			
	
	},
	
//	获取当前页面所有的li
	findAllLi:function(){
		
		var num_li = content.part_file.getElementsByTagName("li");
		return num_li;
	},
//	寻找所传入的参数所有子集中是否含有这个类的元素,有则返回,没有则不返回,传入参数的格式
//	#a,.b
	findClass:function(_parent,_class){
		var str = _parent+" "+_class;
		var chils = document.querySelector(str);
		if(chils){
			return chils;
		}
//		else{
//			var _childrens = document.querySelectorAll(_parent).children;
//			var _class = _class.substring(1);
//			var re = new RegExp(_class);
//			for (var i = 0; i < _childrens.length; i++) {
//				if(_childrens[i].search(re)!=-1){
//					return _childrens[i];
//				}
//				
//			}
//		}
	},
	
	
//	封装一个选中时候的大清洗
	bigWash:function(){
		$("#main_ul li").css({
			"border":"2px solid transparent"
		});
		var li = globleFn.findAllLi();
		for (var i = 0; i < li.length; i++) {
			li[i].onoff = false;
		}
		$("#main_ul li").find("span").removeClass();
        $("#main_ul li").find("span").css({
        	display:"none"
		})
        $("#main_ul li").find("span").addClass("No_chedked");
		$("#main_ul li").css({
			"border-color":"transparent"
		})
	},
	
//	检测是否全选函数
    allOk:function(){
    	var n = 0;
    	var num =  globleFn.findAllLi();
    	for (var i = 0; i < num.length; i++) {
    		if(num[i].onoff){
    			n++;
    		}
    	}
    	
    	if(n==num.length){
    		content.checkedAll=true;
    		tool.checkAll();
    	}
    	else{
    		content.checkedAll=false;
    		content.btn_checkedAll.className = "";
    	}
    	
    },
//	哈希值变化的时候,所进行的函数
	onHashChange : function onHashChange(){
			document.getElementById("ccc").className = "";
			main_ul.innerHTML = "";
			var  has = window.location.hash.substring(1);
			for (var i = 0; i < data.length; i++) {
				
				if(data[i].pid==has){
					globleFn.creatLi(data[i]);
				}
			}
	},
//	删除文件夹
	_delete:function(){
		
		
		var lis =  globleFn.findAllLi();
		for (var i = 0; i < lis.length; i++) {
			if(lis[i].onoff){
				for (var j = 0; j < data.length; j++) {
					if(data[j].id ==lis[i].id){
						data.splice(j,1);
						j--;
//						删除了之后,记得将下边减一
					}
				}
			}
		}
//		完事了时候,直接修改页面hash值,重新渲染
		content.main_ul.innerHTML = "";
		is_new = false;
		var has = window.location.hash.substring(1);
		for (var i = 0; i < data.length; i++) {
			if(data[i].pid ==has){
				globleFn.creatLi(data[i],is_new);
			}
		}
	},
//	回弹选框函数
	back_top:function(){
		
		$("#warming").css({
			"animation": "warm2 1.5s",
			"animation-fill-mode":"forwards"
		})
//		改变top值
		$("#warming").on("webkitAnimationEnd",function(){
			$("#warming").css({
				top:"-300px"
			})
		})
	
	},
//	生成small里面的li函数
	creatSmallLi:function(){
		var str = '';
//		获取到页面所有的li
		var lis =  globleFn.findAllLi();
//		此数组来剔除已经选中的li
		var _data = [];
//		先将data放入_data中去
		for (var i = 0; i < data.length; i++) {
			_data.push(data[i])
		}

//		chec_lis存储页面中已经选中的li的id
		var chec_lis = [];
		for (var i = 0; i < lis.length; i++) {
			if(lis[i].onoff){
				chec_lis.push(lis[i].id);
			}
		}
		
//		剔除已经选中的data
		for (var i = _data.length-1; i>=0; i--) {
			for (var j = 0; j< chec_lis.length; j++) {
				if(chec_lis[j]==_data[i].id){
					_data.splice(i,1);
				}
			}
			
		}
		for (var i = 0; i < _data.length; i++) {
			str+='<li><span class="img_small_li"></span><span class="world_small_span">'+_data[i].name+'</span></li>';
		}
//		将选好的_data放到small_lis中间去
		document.getElementsByClassName("real_small_ul")[0].innerHTML = str;
		
		var small_lis =  document.querySelectorAll(".real_small_ul li");
//		初始化small_lis里面的所有li
		for (var i = 0; i < small_lis.length; i++) {
			small_lis[i].onoff = false;
			small_lis[i]._id = _data[i].id;
		}
		$(".real_small_ul li").on("click",function(){
//			大清洗
			$(".real_small_ul li").css({
				background:""
			})
//			自身背景颜色变为灰色
			$(this).css({
				background:"#f1f1f1",
			})
//			大清洗开关
			for (var i = 0; i < lis.length; i++) {
				small_lis[i].onoff = false;
			}
//			自身开关变为true
			var _this = $(this).index();
			small_lis[_this].onoff = true;
		})
	},
//	根据页面的hash值重新渲染页面函数
	makepage:function(){
		content.main_ul.innerHTML = "";
		var  is_new = false;
		var has = window.location.hash.substring(1);
		for (var i = 0; i < data.length; i++) {
			if(data[i].pid==has){
				globleFn.creatLi(data[i],is_new)
			}
		}
	},

     
//	获取页面所有被选中的元素个数
	getAllcheck:function(){
		var lis = tool.getAllLi();
		var n = 0;
		for (var i = 0; i < lis.length; i++) {
			if(lis[i].onoff){
				n++;
			}
			
		}
		return n;
	},
//	重命名功能函数
	nameagin:function(){
		var lis = tool.getAllLi();
		var n= globleFn.getAllcheck();
		console.log(n);
		if(n==0){
			alert("请选择需要命名的文件");
			return;
		}
		else if(n>1){
			alert("每次只能选中一个文件");
			return;
		}
		else{
			for (var i = 0; i < lis.length; i++) {
				if(lis[i].onoff){
					$(lis[i]).find(".box_new_li").css({
						display:"block"
					});
					$(lis[i]).find(".box_new_li").find(".btn2").focus();
					$(lis[i]).find(".box_new_li").find(".btn2").sele
					$(lis[i]).find(".new_p").css({
						display:"none"
					})
				}
			}
			
		}
		
	},
//	搜索函数
	searchFile:function(){
		var is_new = false;
		var n = 0;
		var _value = $(".inp_sousuo").val();

		for (var i = 0; i < data.length; i++) {
            n++;
			if(_value==data[i].name){

				window.location.hash = -1;
				document.querySelector("#main_ul").innerHTML = "";
				globleFn.creatLi(data[i],is_new);
				globleFn.cue("搜索成功");
				return;
			}

			
		}
		if(n==data.length){
			alert("对不起，没有找到您要的文件,请查看是否输入有误~");
		}
	},
//	碰撞检测函数
	crack:function(_div){
//		先大清洗
		globleFn.bigWash();
		var lis = tool.getAllLi();
		for (var i = 0; i < lis.length; i++) {
			var li_T = lis[i].getBoundingClientRect().top;
			var li_R = lis[i].getBoundingClientRect().left+lis[i].clientWidth;
			var li_B = lis[i].getBoundingClientRect().top +lis[i].clientHeight;
			var li_L = lis[i].getBoundingClientRect().left;
			
			var d_T = _div.getBoundingClientRect().top;
			var d_R = _div.getBoundingClientRect().left+_div.clientWidth;
			var d_B = _div.getBoundingClientRect().top +_div.clientHeight;
			var d_L = _div.getBoundingClientRect().left;
			
			if(li_T>d_B||li_R<d_L||li_B<d_T||li_L>d_R){
				
			}
			else{
				lis[i].onoff = true;
				$(lis[i]).css({
					"border-color":"blue"
				});
				$(lis[i]).find("span").css({
					"display":"block",
				}).addClass("is_checked") 
			}
			
		}
		
	}
	
	
}



























			
			


