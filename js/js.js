
		
			var num = -1;
			
			var d5 = document.getElementById("d5");
			
			var part_file = document.getElementById("part_file");
			
			var fin_arr = [];	
//			最终抬起那个li的id
			var up_li_id = null;
			
//			获取全选沟
			var ccc = document.getElementById("ccc");
			
			var chec_all = document.getElementById("chec_all");
//			获取全选
		
			var nav_left = document.getElementById("nav_left");
			
			var ul_left = document.getElementById("ul_left");
			
			var li_s = ul_left.getElementsByTagName('li');
			
			var part_top = document.getElementById('part_top');
			
			var li_s_top = part_top.children;
			
			var num = 0;
			
			var si_ge = document.getElementById('si_ge');
			
			var main_ul = document.getElementById('main_ul');
			
			
			var lis_si_ge = si_ge.getElementsByTagName('li');
			
			var d2 = document.getElementById('d2');
			
			var d3 = document.getElementById('d3');
			
			var d4 = document.getElementById('d4');
			
			var rm_ul = document.getElementById('rm_ul');
			
			var li_s_rm_ul = rm_ul.getElementsByTagName('li');
			
			var rignt_more = document.getElementById('rignt_more');
			
			var menu_new_file = document.getElementById('menu_new_file');
//			img_b_and_s 为切换大图还是横栏时候的图标

			var img_b_and_s = document.getElementById('img_b_and_s');

			
//			给top的li添加hover效果
			for (var i = 0; i < li_s_top.length; i++) {
				
				li_s_top[i].index = i;
				
				li_s_top[i].onmousemove = function(){
					
					this.style.backgroundColor = "#0f0f0f";
					this.style.color = "#fff"
					
				}
				li_s_top[i].onmouseout = function(){
					
					this.style.backgroundColor = "#252525";
					this.style.color = "#ccd8d8"
					
				}
				
			}
			
			
		img_b_and_s.addEventListener("click",chang_b_s);
//		切换视图函数
			
//		onoff_img_b_and_s是是否切换视图的开关,true为大图，false为小图模式
		var onoff_img_b_and_s = true;
		function chang_b_s(){
//			onoff_img_b_and_s是对应的开关
			onoff_img_b_and_s = !onoff_img_b_and_s;
			 cr();
			if(onoff_img_b_and_s){
				img_b_and_s.src = "img/big_icoo.png";
			}
			else{
				img_b_and_s.src = "img/small_icco.png";
				 cr();
			}
			
		}

			
//			给侧边栏hover效果
			for (var i = 0; i < li_s.length; i++) {
				
				li_s[i].index = i;
				
				
				li_s[i].onmouseover = function(){
					
					this.firstElementChild.className = "sp"+ (parseInt(this.index) +1) + "_change";
					
					this.lastElementChild.style.color = '#0f67ca';
					
					this.style.backgroundColor = "#e1e1e1";
				}
				
				li_s[i].onmouseout = function(){
					
					this.firstElementChild.className = "sp"+ (parseInt(this.index)+1);
					
					this.lastElementChild.style.color = '#000';
					
					this.style.backgroundColor = "#eff4f8";
					
					
				}
			}
			
			for (var i = 0; i < lis_si_ge.length; i++) {
				
				lis_si_ge[i].onmouseover = function(){
					
					this.firstElementChild.className = this.firstElementChild.className + "_change";
					
					this.style.color = "#2079db";
					
					this.style.fontWeight = 'bold';
					
					
					
				}
				
				lis_si_ge[i].onmouseout = function(){
					
					this.firstElementChild.className = this.firstElementChild.className.split("_")[0];
					
					this.style.color = "black";
					
					this.style.fontWeight = 'normal';
					
				}
				
			}
		
			
			function change_tool(obj){
//				console.log(obj.firstElementChild.className);
				obj.firstElementChild.className = obj.firstElementChild.className +"c";
				
				obj.lastElementChild.style.color = "#1970d2";
				
//				obj.lastElementChild.style.fontWeight = 'bold';
				
				
				obj.style.backgroundColor = '#e1e1e1';
				
				
				
			}
			
			function back_tool(obj){
				obj.firstElementChild.className = obj.firstElementChild.className.slice(0,obj.firstElementChild.className.length-1);


				obj.lastElementChild.style.color = "#666";
				
				obj.style.backgroundColor = '#fff';
				
			}
		
			d2.onmouseenter = function(){
				change_tool(this);
			}
			d2.onmouseleave = function(){
				back_tool(this);
			}
			
			
			d3.onmouseenter = function(){
				change_tool(this);
			}
			d3.onmouseleave = function(){
				back_tool(this);
			}
			
			d4.onmouseenter = function(){
				change_tool(this);
			}
			d4.onmouseleave = function(){
				back_tool(this);
			}
			
			
//			li_s_rm_ul rm的id

			for (var i = 0; i < li_s_rm_ul.length; i++) {
				
				li_s_rm_ul[i].onmouseenter = function(){
					this.style.backgroundColor = "#e1e1e1";
				}
				li_s_rm_ul[i].onmouseleave = function(){
					this.style.backgroundColor = "#f6f6f9";
				}
				
			}
			
			
//			rignt_more的抚摸事件

			rignt_more.onmousemove = function(){
				
				rm_ul.style.display = 'block';
				
			}
			
			rignt_more.onmouseout = function(){
				
				rm_ul.style.display = 'none';
				
			}
			 var data = [
				{
					"name": "我的游戏",
					"id":1,
					"pid":0
				},
				
				{
					"name":"我的照片",
					'id':2,
					"pid":0
					
				},
				{
					"name":"我的视频",
					'id':3,
					"pid":0
				},
				{
					"name":"风景照片",
					"id":4,
					"pid":2
				},
				{
					'name':"旅游照片",
					'id':5,
					'pid':2
				},
				{
					'name':"暗黑血统",
					'id':6,
					'pid':1
				},
				{
					'name':"明星",
					'id':7,
					'pid':0
				},
				{
					'name':"林俊杰",
					'id':8,
					'pid':7
				},
				{
					'name':"周杰伦",
					'id':9,
					'pid':7
				},
				{
					'name':"韩红",
					'id':10,
					'pid':7
				},
				{
					"name":"最终幻想",
					'id':11,
					"pid":1
				},
				{
					"name":"我的电子用品",
					"id":12,
					"pid":0
				},
				{
					"name":"苹果笔记本",
					"id":13,
					"pid":12
				},
				{
					"name":"三星电脑",
					"id":14,
					"pid":12
				}
				
				
			
			]
			 
//			 生成数据
//			hash值变化时候,变换页面
			if(!window.location.hash ){
				window.location.hash = 0;
			}
			
			
			window.onhashchange = has_change;
			
			function has_change(){
				
				
			main_ul.innerHTML = "";
			
			var has = window.location.hash.substring(1);
			
			
			
			for (var i = 0; i < data.length; i++) {
				
				if(data[i].pid==has){
					creat_li(data[i]);
				}
			}
			}
//			main_ul = document.getElementById('main_ul');
//				
//			var main_lis = main_ul.getElementsByTagName('li');
//			
//			for (var i = 0; i < main_lis.length; i++) {
////				不会
////				main_lis[i].addEventListener("mousedown",new_li_down);
//			}
//			}
			
//			function new_li_down(e){
//					e.stopPropagation();
//					
//					this.style.cursor = "copy";
//					
//					part_file.onmousemove = function(e){
//						
//					this.style.cursor = "copy";
//					
//					e.stopPropagation();
//						
//					}
//					part_file.onmouseup = function(e){
//						
//					e.stopPropagation();
//						
//					fin_arr = [];
//					
//					up_li_id = null;
//					
//					var main_ul = document.getElementById('main_ul');
//				
//					var main_lis = main_ul.getElementsByTagName('li');
//					
////					获取页面选中的li的id
//					for (var i = 0; i < main_lis.length; i++) {
//						
//						if(main_lis[i].firstElementChild.checked){
//							fin_arr.push(main_lis[i].id);
//						}
//					}
//					
////						最终up起来的那个li
//						for (var i = 0; i < main_lis.length; i++) {
//							
//							if(!main_lis[i].onoff){
//								return;
//							}
//							if(main_lis[i].onoff){
//								up_li_id = main_lis[i].id;
//								
//							}
//						}
//					console.log(up_li_id);
//						
//						
//						for (var i = 0; i < data.length; i++) {
//							
//							for (var j = 0; j < fin_arr.length; j++) {
//								
//								if(data[i].id==fin_arr[j]){
//									data[i].pid = up_li_id;
//								}
//							}
//						}
//						console.log(fin_arr,up_li_id);
//						cr();
//						document.onmousemove = document.onmouseup = null;
//						part_file.addEventListener("mousedown",p_mousedown);
//						
//					}
//					
//					e.preventDefault();
//					return false;
//					
//				}
			
			
//			点击刷新的时候,不出现bug
			has_change();
			
//			console.log(window.location.hash);
			d2.onclick = function(){
				
				new_fi();
				cr();
				
			}
			
//			新建文件夹函数

			function new_fi(){
				
				ccc.checked=false;
				
				num = data.length + 1;
				
				var has = window.location.hash;
				
				var obj = {
					"name":"新建文件夹("+num+")",
					"id":num,
					"pid":has.substring(1)
				}
				
				data.push(obj);
			}

//			根据data数据生成新li的函数

//				清洗页面,生成li函数
				function cr(){
					
					var has = window.location.hash.substring(1);
					
					main_ul.innerHTML = "";
					
					for (var i = 0; i < data.length; i++) {
						
						if(data[i].pid==has){
							creat_li(data[i]);
						}
						
						
					}
				
				}
				
//				拖拽移动函数
//			function carry_in(e){
//				
//				var main_ul = document.getElementById('main_ul');
//		
//				var main_lis = main_ul.getElementsByTagName('li');
//				
//				
//				
//				
//				
//				
//			}
				
//			给每一个li一个鼠标移入,移除变换鼠标指针和边框样式的函数
//			移入变化,移入，开关为true
			function li_css_in(e){
				
				e.stopPropagation;
				
				this.onoff3 = true;
//				console.log(this.onoff)
				
			}
//			移出变化函数,移出，li的开关为false
			function li_css_out(e){
				
				e.stopPropagation();
				
				this.onoff_3 = false;
				
//				console.log(this.onoff)
				
			}
			
//			生成li函数
			function creat_li(obj){
				
				var new_li = document.createElement('li');
				
				new_li.id = obj.id;
				
				new_li.onoff = false;
				
				new_li.onoff_3 = false;
				
				new_li.addEventListener("dblclick",dbl_fn);
				
				new_li.addEventListener("mousedown",chec_ooo);
				
//				这个box用来存放重命名的按钮
				var box = document.createElement('div');
				
			    var new_input = document.createElement('input');
			    
			    new_input.style.display = "none";
			    
			    var new_input2 = document.createElement('input');
			    
			    new_input2.style.display = "none";
			    
			    var p_content = document.createElement('p');
			    
			  	 p_content.innerHTML = obj.name;
			    
			    new_input2.type = 'text';
			    
			    var new_input3 = document.createElement('input');
			    
			    new_input3.style.display = "none";
			    
			    new_input3.type = 'button';
			    
			    var new_input4 = document.createElement('input');
			    
			    new_input4.style.display = "none";
			    
			    new_input4.type = 'button'
			    
			    new_input.type = "checkbox";
			    
//				这个choos_box功能:选中时候,出现的遮罩层		    
			    var choos_box = document.createElement('div');
			    
			    
				
				new_li.appendChild(new_input);
				box.appendChild(new_input2);
				box.appendChild(new_input3);
				box.appendChild(new_input4);
				new_li.appendChild(box);
				new_li.appendChild(p_content);
				main_ul.appendChild(new_li);
				new_li.appendChild(choos_box);
//				为大视图的时候,各个input的类
				if(onoff_img_b_and_s){
					choos_box.className = "div_choose";
					new_li.className = "mew_class_of_li_old class_one";
					p_content.className = "new_p";
					new_input.className = 'btn1';
					 new_input2.className = 'btn2';
					new_input3.className = 'btn3';
					new_input4.className = 'btn4';
				}
				else if(!onoff_img_b_and_s){
					choos_box.className = "div_choose";
					new_li.className = "class_tow";
					p_content.className = "new_p_small";
					new_input.className = 'btn1_small';
					new_input2.className = 'btn2_small';
					new_input3.className = 'btn3_small';
					new_input4.className = 'btn4_small';
				}
				
				box.style.display = "none";
				
//				new_li.onmousedown = function(e)
				
//				new_li.addEventListener("mousedown",new_li_down);
					
				
				
				
//				右键事件
				
				new_li.oncontextmenu = function(e){
					
					var main_ul = document.getElementById('main_ul');
		
					var main_lis = main_ul.getElementsByTagName('li');
					
					e.preventDefault();
					
					menu_new_file.style.display = 'block';
					
					menu_new_file.style.left = e.clientX + 10 +"px";
					
					menu_new_file.style.top = e.clientY +  10 +"px";
					
//					大清洗
					for (var i = 0; i < main_lis.length; i++) {
								main_lis[i].firstElementChild.style.display = "none";
								main_lis[i].firstElementChild.checked = false;
								main_lis[i].onoff = false;
								if(onoff_img_b_and_s){
									main_lis[i].className = "mew_class_of_li_old class_one";
								}
								else{
									main_lis[i].className = "class_tow";
								}
								
					}
					
					this.firstElementChild.style.display = "block";
					this.firstElementChild.checked = true;
					this.onoff = true;
					if(onoff_img_b_and_s){
						this.className = "mew_class_of_li class_one";
					}
					else{
						this.className = "class_tow";
					}
					
					
					
				}
				
				new_input2.onclick = function(e){
					e.stopPropagation();
				}
				new_input3.onclick = function(e){
					
					e.stopPropagation();
					
					if(new_input2.value==""){
						
//					new_input.style.display = "none";
					
					new_input2.style.display = "none";
					
					new_input3.style.display = "none";
					
					new_input4.style.display = "none";
					
					p_content.style.display = "block";
					}
					else{
					p_content.innerHTML = new_input2.value;
					
					obj.name = new_input2.value;
					
//					new_input.style.display = "none";
					
					new_input2.style.display = "none";
					
					new_input3.style.display = "none";
					
					new_input4.style.display = "none";
					
					p_content.style.display = "block";
					}
					
					
				
				}
				
				new_input4.onclick = function(e){
					
					e.stopPropagation();
//					new_input.style.display = "none";
					
					new_input2.style.display = "none";
					
					new_input3.style.display = "none";
					
					new_input4.style.display = "none";
					
					p_content.style.display = "block";
				}
			}

				
//				包装的大清洗函数
				function wash(){
					var main_ul = document.getElementById('main_ul');
					
					var main_lis = main_ul.getElementsByTagName('li');
					
					for (var i = 0; i < main_lis.length; i++) {
						
					main_lis[i].firstElementChild.style.display = "none";
					
					main_lis[i].firstElementChild.checked = false;
					
					main_lis[i].onoff = false;
					
					if(onoff_img_b_and_s){
						
						main_lis[i].className = "mew_class_of_li_old class_one";
						
					}
					else{
						
						main_lis[i].className = "class_tow";
						
					}
					
				}
				}
				
				var timer = null;
				function chec_ooo(e){
					var that = this;
					timer = setTimeout(function(){
						console.log("gogogo");
						that.addEventListener("mousedown",go_to) ;
					},500);
					var main_ul = document.getElementById('main_ul');
		
					var main_lis = main_ul.getElementsByTagName('li');
					
					menu_new_file.style.display = "none";
					
					if(e.target.nodeName!="LI"){
						return;
					}
					
					
//					单选函数
					if(!e.ctrlKey){
						if(!e.target.onoff){
//							大清洗函数
							wash();
								
								if(onoff_img_b_and_s){
									e.target.className = "mew_class_of_li class_one";
								}
								else{
									e.target.className = "class_tow";
								}
							e.target.onoff = true;
							e.target.firstElementChild.style.display = "block";
							e.target.firstElementChild.checked = true;
						}
						else{
//							大清洗函数
							wash();
							if(onoff_img_b_and_s){
									e.target.className = "mew_class_of_li_old class_one";
								}
								else{
									e.target.className = "class_tow";
								}
							e.target.onoff = false;
							e.target.firstElementChild.style.display = "none";
							e.target.firstElementChild.checked = false;
							
						}
					}
//					多选函数
					else{
						
						if(!e.target.onoff){
							console.log("选上了");
							if(onoff_img_b_and_s){
									e.target.className = "mew_class_of_li class_one";
								}
								else{
									e.target.className = "class_tow";
								}
							e.target.onoff = true;
							e.target.firstElementChild.style.display = "block";
							e.target.firstElementChild.checked = true;
						}
						else{
							console.log("不选了");
							if(onoff_img_b_and_s){
									e.target.className = "mew_class_of_li_old class_one";
								}
								else{
									e.target.className = "class_tow";
								}
							e.target.onoff = false;
							e.target.firstElementChild.style.display = "none";
							e.target.firstElementChild.checked = false;
							
						}
						console.log(this.onoff)
					}
					if_all_chec();
					e.stopPropagation();
					e.preventDefault();
					clearTimeout(timer);
					return false;
				}
				
				
//				点击右键弹出的删除键,进行删除功能，重命名功能
				
				var dele_only_one = menu_new_file.children[6];
				
//				
				dele_only_one.addEventListener("click",dele);
				
//				右键单击时候,消失
				
				function dispoin_menu(e){
//					e.stopPropagation();
					this.style.display = "none";
				}
				menu_new_file.addEventListener("click",dispoin_menu);
				
////				点击空白,新建文件夹默认行为
////				function clink_bl_li(){
////					var main_ul = document.getElementById('main_ul');
////		
////					var main_lis = main_ul.getElementsByTagName('li');
////					
////					var new_input2 = main_ul.getElementsByClassName("btn2");
////					
////					var box = main_ul.getElementsByTagName('div');
////					
////					var p_content = main_ul.getElementsByClassName("new_p");
////					
////					
////					for (var i = 0; i < main_lis.length; i++) {
////						
//////						main_lis[i].firstElementChild.checked = false;
////						main_lis[i].onoff = false;
////						main_lis[i].className = "mew_class_of_li_old";
////						main_lis[i].firstElementChild.checked = false;
////						main_lis[i].firstElementChild.style.display = "none";
////						
////						if(	box[i].style.display != 'none')
////						{
////							
////						box[i].style.display = 'none';
////						}
////					}
////				}
////				document.addEventListener('mousedown',clink_bl_li);
////				document.addEventListener("click",if_all_chec);
//				
//				
				
		
		
		document.addEventListener('click',menu_new_file_none);
		
		function menu_new_file_none(e){
			
			menu_new_file.style.display  = 'none';
			
		}
		
//		全选函数
		function chec_all_fn(e){
			e.stopPropagation();
			var main_ul = document.getElementById('main_ul');
		
			var main_lis = main_ul.getElementsByTagName('li');
			if(ccc.checked){
				
				for (var i = 0; i < main_lis.length; i++) {
					
        			main_lis[i].firstElementChild.style.display = "block";
					main_lis[i].firstElementChild.checked = true;
				}
			}
			else{
				for (var i = 0; i < main_lis.length; i++) {
					main_lis[i].firstElementChild.style.display = "none";
					main_lis[i].firstElementChild.checked = false;
				}	
			}
		}
		ccc.onclick = chec_all_fn;
		
//		判断全选函数打钩与否
        function if_all_chec(e){
        	
        	var main_ul = document.getElementById('main_ul');
		
			var main_lis = main_ul.getElementsByTagName('li');
			
			
			
			
//			num是当前页面打钩数目
			var num = 0;
        	
        	for (var i = 0; i < main_lis.length; i++) {
        		
        		if(main_lis[i].firstElementChild.checked == true){
        			
        			num++;
        		}
        	}
        	if(num==main_lis.length&&num!=0){
        		ccc.checked = true;
        	}
        	else{
        		ccc.checked = false;
        	}
        	
        	if(e){
        		e.stopPropagation();
        	}
        	
        }
		
//		删除函数
		function dele(e){
			e.stopPropagation();
			
			if(!confirm("确认要删除吗？")){
				return;
			}
			
			var n = null;
			
			var main_ul = document.getElementById("main_ul");
			
			var li_s = main_ul.getElementsByTagName('li');
			
			for (var i = 0; i < li_s.length; i++) {
				 
				if(li_s[i].children[0].checked){
					
					 n = li_s[i].id;
					 
					for (var j = 0; j < data.length; j++) {
						
						if(data[j].id==n){
							data.splice(j,1);
						}
					}
				}
			}
			 cr();
			 ccc.checked = false;
			menu_new_file.style.display = "none";
			
			
			
			
		}

		var d5 = document.getElementById("d5");
		
		d5.onclick = dele;
		
		var name_aaa = menu_new_file.getElementsByTagName("li")[5];
		
//		console.log(name_aaa.innerHTML)
		
		name_aaa.addEventListener("click",name_film);
		
//		记录当前那个li被选中 
//		重命名函数
		var cur=null;
			
			function name_film(e){
				
				e.stopPropagation();
				
				var main_ul = document.getElementById('main_ul');
		
				var main_lis = main_ul.getElementsByTagName('li');
				
				for (var i = 0; i <main_lis.length;i++){
					if(main_lis[i].children[0].checked){
						cur = i;
					}
					
				}
				
				
//				var name_ag = menu_new_file.getElementsByTagName("li")[5];
				
				var div_1 = main_lis[cur].getElementsByTagName("div")[0];
				
				var new_input2 = main_lis[cur].getElementsByTagName("input")[1];
				
				var new_input3 = main_lis[cur].getElementsByTagName("input")[2];
				
				var new_input4 = main_lis[cur].getElementsByTagName("input")[3];
				
				var p = main_lis[cur].getElementsByTagName("p")[0];
				
				p.style.display = 'none';
				
				new_input2.style.display = "block";
				
				new_input3.style.display = "block";
				
				new_input4.style.display = "block";
				
				div_1.style.display = "block";
				
				menu_new_file.style.display = "none";
				
				new_input2.focus();
			}
		
//		拖拽多选函数
		document.addEventListener("mousedown",p_mousedown);
		
//		part_file.onmousedown = function(e)
				function  p_mousedown(e){
					
					if(e.target.id=="main_ul"||e.target.id=="part_file"){
			
			var div = document.createElement("div");
			
//			div.style.zIndex = "999";
			
			var main_ul = document.getElementById('main_ul');
		
			var main_lis = main_ul.getElementsByTagName('li');
			
			wash();
//			for (var i = 0; i < main_lis.length; i++) {
//				
//				main_lis[i].firstElementChild.checked = false;
//				
//				main_lis[i].firstElementChild.style.display = "none";
//				
//				if(onoff_img_b_and_s){
//						main_lis[i].className = "mew_class_of_li_old class_one";
//					}
//					else{
//						main_lis[i].className = "class_tow";
//					}
//				
//			}
			
			div.className = "chec_class";
			
			div.style.position = "absolute";
			
			div.style.backgroundColor = "cornflowerblue";
			
			div.style.opacity = 0.3;
			
			part_file.appendChild(div);
			
			var b_y = null;
			
//			n用来记录被选中的编号
			var n = [];
			
//			if(document.body.scrollTop){
//				
//				 b_y = e.clientY + document.body.scrollTop;
//			}
//			else{
//				
//				  b_y = e.clientY + document.documentElement.scrollTop;
//			}
			
			var b_x = e.clientX;
			
			var b_y = e.clientY;
			
			
			document.onmousemove = function(e){
				
				e.stopPropagation();
				
				var fin_x = e.clientX;
				
				var fin_y = e.clientY;
				
//				if(div.parentNode){
					
				div.style.width = Math.abs(b_x - fin_x) + "px";
//				
				div.style.height = Math.abs(b_y - fin_y) + "px";
				
//				if(document.body.scrollTop){
//					
//				 b_y = e.clientY - document.body.scrollTop;
//				}
//				else{
//				
//				  b_y = e.clientY - document.documentElement.scrollTop;
//				}'
				
				var fin_top = Math.min(b_y,fin_y);
				
				div.style.left = Math.min(b_x,fin_x) + "px";
				
				div.style.top = fin_top + "px";
				
				console.log( div.offsetTop);
				
				
				n = crash();
				
				
//				}
			}
		
			
			document.onmouseup = function(e){
				
				
				
				e.stopPropagation();
				
				var main_ul = document.getElementById('main_ul');
		
				var main_lis = main_ul.getElementsByTagName('li');
				
				var part_file = document.getElementById("part_file");
				
				if(div.parentNode){
					
					part_file.removeChild(div);
				}
				else{
					return;
				}
				for (var i = 0; i < n.length; i++) {
					
					
					main_lis[n[i]].firstElementChild.style.display= "block";
					
					if(onoff_img_b_and_s){
						main_lis[n[i]].className = "mew_class_of_li class_one";
					}
					else{
						main_lis[n[i]].className = "class_tow";
					}
					
					main_lis[n[i]].firstElementChild.checked = true;
					
				}
				if_all_chec();
				
				document.onmousemove = document.onmouseup = null;
				
			}
			
			e.stopPropagation();
			e.preventDefault();
			
			return false;
		}
				}
		
			
//		碰撞检测函数
//		#part_file
		function crash(){
			
			var arr = [];
			
			var div = part_file.getElementsByClassName('chec_class')[0];
			
			var main_ul = document.getElementById('main_ul');
		
			var main_lis = main_ul.getElementsByTagName('li');
			
			var div_left = div.getBoundingClientRect().left;
			
			var div_top = div.getBoundingClientRect().top;
			
			var div_bottom = div_top + div.offsetHeight;
			
			var div_right = div_left + div.offsetWidth;
			
			var li_left = null;
			
			var li_top = null;
			
			var li_right = null;
			
			var li_bottom = null;
			
			for (var i = 0; i < main_lis.length; i++) {
				
				li_left = main_lis[i].getBoundingClientRect().left;
				
				li_top = main_lis[i].getBoundingClientRect().top;
				
				li_right = li_left + main_lis[i].offsetWidth;
				
				li_bottom = li_top + main_lis[i].offsetHeight;
				
				if(div_right<li_left||div_bottom<li_top||div_left>li_right||div_top>li_bottom){
					
				}
				else{
					main_lis[i].firstElementChild.style.display= "block";
					
					if(onoff_img_b_and_s){
						main_lis[i].className = "mew_class_of_li class_one";
					}
					else{
						main_lis[i].className = "class_tow";
					}
					
					main_lis[i].firstElementChild.checked = true;
					
					arr.push(i);
					
				}
				
			}
			return arr;
		}


//		双击打开函数

		function dbl_fn(e){
			e.stopPropagation();
			
			window.location.hash = this.id;
			e.preventDefault();
			return false;
		}
		
//		打开函数
		var op = document.getElementById("open_film");
		
		op.onclick = function(){
			
			
			var main_ul = document.getElementById('main_ul');
		
			var main_lis = main_ul.getElementsByTagName('li');
			
			for (var i = 0; i < main_lis.length; i++) {
				
				if(main_lis[i].firstElementChild.checked){
					window.location.hash = main_lis[i].id;
				}
				
			}
		}
		

		var move_to = document.getElementById("move_to");
		
		move_to.onclick = move_to_fn;
		
		var bax_move = document.getElementById("bax_move");
		
		var cc = document.getElementById("cc");
		
		var move_ul = document.getElementById("move_ul");
		
		cc.onclick = function(){
			this.parentNode.parentNode.style.display = "none";
		}
		
//		移动到函数		
		function move_to_fn(){
			
			move_ul.innerHTML = "";
			
			bax_move.style.display = "block";
			
			var main_ul = document.getElementById('main_ul');
		
			var main_lis = main_ul.getElementsByTagName('li');
			
			for (var i = 0; i < data.length; i++) {
					move_creat_li(data[i]);
			}
		}

//		移动到里面的生成函数
		function move_creat_li(obj){
			
				
				var new_li = document.createElement('li');
				
				new_li.id = obj.id;
				
				new_li.onoff = false;
				
				var box = document.createElement('div');
				
			    var new_input = document.createElement('input');
			    
			    new_input.style.display = "none";
			    
			    var new_input2 = document.createElement('input');
			    
			    new_input2.style.display = "none";
			    
			    var p_content = document.createElement('p');
			    
			  	 p_content.innerHTML = obj.name;
			    new_input2.type = 'text';
			    
			    var new_input3 = document.createElement('input');
			    
			    new_input3.style.display = "none";
			    
			    new_input3.type = 'button';
			    
			    var new_input4 = document.createElement('input');
			    
			    new_input4.style.display = "none";
			    
			    new_input4.type = 'button'
			    new_input.type = "checkbox";
			    
//			    生成加号点击打开关闭按钮
				var jia_jian = document.createElement("span");
				
				jia_jian.innerHTML = "＋";
				
				jia_jian.className = "jia_jian";
				
				new_li.appendChild(new_input);
				box.appendChild(new_input2);
				box.appendChild(new_input3);
				box.appendChild(new_input4);
				new_li.appendChild(box);
				new_li.appendChild(p_content);
				new_li.appendChild(jia_jian);
				move_ul.appendChild(new_li);
				
//				为大视图的时候,各个input的类
				
					new_li.className = "class_tow";
					p_content.className = "new_p_small";
					new_input.className = 'btn1_small';
					new_input2.className = 'btn2_small';
					new_input3.className = 'btn3_small';
					new_input4.className = 'btn4_small';
				
				box.style.display = "none";
//				点击事件
				new_li.onclick = function(){
					
					var move_ul = document.getElementById('move_ul');
		
					var main_lis = move_ul.getElementsByTagName('li');
					
					console.log(main_lis.length)
					
					for (var i = 0; i < main_lis.length; i++) {
						
						main_lis[i].className = "class_tow";
						
						main_lis[i].onoff = false;
					}
					this.className = "class_small_li_pick class_tow";
					this.onoff = true;
				}
				
		}
		
//		移动到的确定和取消点击事件

		var d6 = document.getElementById("d6");
		
		var d7 = document.getElementById("d7");
		
		d6.onclick = function(){
			
			var main_ul = document.getElementById('main_ul');
		
			var main_lis = main_ul.getElementsByTagName('li');
			
			var move_ul = document.getElementById('move_ul');
		
			var move_lis = move_ul.getElementsByTagName('li');
			
			var cur = null;
//			cur用来存储页面选中的那个文件夹的id;

			var will_id = null;
//			遍历页面,找到想要变换的那个元素
			for (var i = 0; i < main_lis.length; i++) {
				
				if(main_lis[i].firstElementChild.checked){
					
					cur = main_lis[i].id;
				}
			}
//			便利移动到里面的ul,找到最终的去向
			for (var i = 0; i < move_lis.length; i++) {
				
				if(move_lis[i].onoff){
					
					will_id = move_lis[i].id;
				}
			}
			
			for (var i = 0; i < data.length; i++) {
				
				if(data[i].id==cur){
					
					if(data[i].pid==cur){
						alert("不能将文件移动到自身文件夹下");
						return;
					}
					data[i].pid = will_id;
				}
			}
			
			cr();
			bax_move.style.display = "none";
		}
		
		d7.onclick = function(){
			bax_move.style.display = "none";
		}
////			拖拽移动到函数
//		function go_to(){
//			
//			var f_arr = [];
//			
//			var this_id = this.id;
//			
//			var main_ul = document.getElementById('main_ul');
//		
//			var main_lis = main_ul.getElementsByTagName('li');
//			
////			获取选中的li的id
//			for (var i = 0; i < main_lis.length; i++) {
//				
//				if(main_lis[i].firstElementChild.checked){
//					
//					f_arr.push(main_lis[i].id);
//					
//				}
//			}
//			
////			找到data中id为选中的那些元素,将他们的pid统一改为移入的那个的id
//			for (var i = 0; i < data.length; i++) {
//				
//				for (var j = 0; j < f_arr.length; j++) {
//					
//					if(data[i].id==f_arr[j]){
//						data[i].pid = this_id;
//					}
//				}
//			}
//			cr();
//		}
//		
//
//
//			main_ul = document.getElementById('main_ul');
////				
////			var main_lis = main_ul.getElementsByTagName('li');
////			
////			for (var i = 0; i < main_lis.length; i++) {
//////				不会
//////				main_lis[i].addEventListener("mousedown",new_li_down);
////			}
////			}
//			拖拽移动到函数

//			document.addEventListener("mousedown",go_to);
			function go_to(e){
				
					e.stopPropagation();
					
					if(e.target.nodeName!="LI"){
//						 part_file.removeEventListener("mousedown",go_to);
//						 e.target.addEventListener("mousedown",chec_ooo)
//						 new_li.addEventListener("click",chec_ooo);
						return;
					}
					
					part_file.onmousemove = function(e){
						
					this.style.cursor = "copy";
					
					e.stopPropagation();
						
					}
					part_file.onmouseup = function(e){
//					不能放入已经被选中的li里面
					if(!e.target.firstElementChild.checked){
						return;
					}
						
					e.stopPropagation();
						
					fin_arr = [];
					
					up_li_id = null;
					
					var main_ul = document.getElementById('main_ul');
				
					var main_lis = main_ul.getElementsByTagName('li');
					
//					获取页面选中的li的id
					
					for (var i = 0; i < main_lis.length; i++) {
						
						if(main_lis[i].firstElementChild.checked){
							fin_arr.push(main_lis[i].id);
						}
					}
					
//						最终up起来的那个li

					for (var i = 0; i < data.length; i++) {
						
						for (var j = 0; j < fin_arr.length; j++) {
							
							if(data[i].id==fin_arr[j]){
								data[i].id = e.target.id;
							}
						}
					}
						
					}
					cr();
					e.preventDefault();
					part_file.onmousemove = part_file.onmouseup = null;
					return false;
					
				}

//			move_to_fn();
