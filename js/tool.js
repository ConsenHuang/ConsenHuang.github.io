var tool = {
	
	
//获取当前页面中所有的文件夹
  	getAllLi: function getAllLi(){
	
	var main_ul = document.getElementById('main_ul');
		
	var main_lis = main_ul.getElementsByTagName('li');
	
	return main_lis;
	},

//右键函数
//li的右击事件
  	RhbClic :  function RhbClic(){
	
					var allLis = getAllLi();
					
					
					e.preventDefault();
					
					menu_new_file.style.display = 'block';
					
					menu_new_file.style.left = e.clientX + 10 +"px";
					
					menu_new_file.style.top = e.clientY +  10 +"px";
					
//					大清洗
					for (var i = 0; i < allLis.length; i++) {
								allLis[i].firstElementChild.style.display = "none";
								allLis[i].firstElementChild.checked = false;
								allLis[i].onoff = false;
								if(onoff_img_b_and_s){
									allLis[i].className = "mew_class_of_li_old class_one";
								}
								else{
									allLis[i].className = "class_tow";
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
					
					
					
				
	},

//根据页面hash值得变更,渲染页面			
 	hasChange :  function hasChange(){
				
				
			main_ul.innerHTML = "";
			
			var has = window.location.hash.substring(1);
			
			
			
			for (var i = 0; i < data.length; i++) {
				
				if(data[i].pid==has){
					creatLi(data[i]);
				}
			}
	},
	
//	获取#id下有这个className的那个元素
	hasName : function hasName(id,name){
		
			return document.querySelector(id+" "+name);
	},
//	全选函数
	checkAll:function(e){
		if(e){
			e.stopPropagation();
		}
        var lis = tool.getAllLi();
//		切换是否选择的开关
		if(content.checkedAll==false){

			for(var i=0;i<lis.length;i++){
                lis[i].onoff = false;
			}
			content.btn_checkedAll.className = "";
			$("#part_file li").find("span").css({
				"display":"none"
			})
			$("#part_file li").find("span").removeClass();
			$("#part_file li").find("span").addClass("No_chedked");
			$("#main_ul li").css({
				 "border": "2px solid transparent"
			})

		}
		else{
            for(var i=0;i<lis.length;i++){
                lis[i].onoff = true;
            }
			content.btn_checkedAll.className = "is_checked";
			$("#part_file li").find("span").css({
				"display":"block"
			})
			$("#part_file li").find("span").removeClass();
			$("#part_file li").find("span").addClass("is_checked");
			$("#main_ul li").css({
				 "border": "2px solid blue"
			})
		}
		
}

}