$(function(){
	$('#kinMaxShow').kinMaxShow({
		height:600,
		intervalTime:2,
		button:{
			showIndex:false,
			normal:{background:'url(images/button.png) no-repeat -14px 0',marginRight:'8px',border:'0',right:'44%',bottom:'20px'},
			focus:{background:'url(images/button.png) no-repeat 0 0',border:'0'}
		},
		hoverPause:false,
		callback:function(index,action){
			switch(index){
					case 0:
						if(action=='fadeIn'){
							$(this).find('.sub_1_1').animate({left:'200px'},600);
							$(this).find('.sub_1_2').animate({right:'200px'},600);
						}else{
							$(this).find('.sub_1_1').animate({left:'10px'},600);
							$(this).find('.sub_1_2').animate({right:'10px'},600);
						}
						break;
					case 1:
						if(action=='fadeIn'){
								
						}else{
							
						}
						break;
					case 2:
						if(action=='fadeIn'){
								
						}else{
							
						}
						break;
					case 3:
						if(action=='fadeIn'){
								
						}else{
							
						}
						break;
			}
		}
		
	});
});