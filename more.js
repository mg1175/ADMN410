$(function () {
	 
	
	//banner图滚动
	jQuery(".focusBox").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",0.5) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
	jQuery(".focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});		
	
		jQuery(".wh").slide({trigger:"click", delayTime:0, switchLoad:"_src" });	



})

















