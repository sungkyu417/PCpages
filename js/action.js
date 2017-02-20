$(document).ready(function(){
	var relWidth=$(document).width();
	$(window).on('resize',function(){
		relWidth=$(document).width();
	});

    $('#content-body').fullpage({
        verticalCentered:false,
        scrollingSpeed:400,
        anchors:['section1','section2','section3','section4','section5','section6'],
        menu:'#menu',
        css3:true,
    });


    $('#show_ad').carousel({interval:'3000' });
    $('.carousel-caption a').hover(function(){
    	$('#show_ad').carousel('pause');
	},function(){
		$('#show_ad').carousel({interval:'3000' });
    });

    //section2_case_hover
   	var aSec2Img=$('.section2_content img');
   	var oHover=$('.section2_content_hover');
   	var oHeader=$('.section2_content_hover div').eq(0);
   	var oFooter=$('.section2_content_hover div').eq(1);
   	var aText=['乐信','园区','众银网','调查问卷'];
   	
   	
   	
   	aSec2Img.each(function(index,aElem){
   		$(this).mouseover(function(){
   			oFooter.html(aText[index]);
   			oHover.css({
   				display:'block',
   				left:$(this).offset().left+'px',
   				zIndex:'10'
   			});
   			if(relWidth<=767){
   				oHeader.animate({
   					top:'8.6%',
   					opacity:'0.5'
   				});
   				oFooter.animate({
   					top:'78%',
   					opacity:'1'
   				});
   			}else if(relWidth<=1200){
   				oHeader.animate({
   					top:'19%',
   					opacity:'0.5'
   				});
   				oFooter.animate({
   					top:'89%',
   					opacity:'1'
   				});
   			}else if(relWidth<=1366){
   				oHeader.animate({
   					top:'7%',
   					opacity:'0.5'
   				});
   				oFooter.animate({
   					top:'77%',
   					opacity:'1'
   				});
   			}else if(relWidth<=1600){
   				oHeader.animate({
   					top:'6.5%',
   					opacity:'0.5'
   				});
   				oFooter.animate({
   					top:'77%',
   					opacity:'1'
   				});
   			}else if(relWidth<=1920){
   				oHeader.animate({
   					top:0,
   					opacity:'0.5'
   				});
   				oFooter.animate({
   					top:'71.4%',
   					opacity:'1'
   				});
			}
   			}
   			
		
   	);
	
	});

   	oHover.mouseout(function(){
		if(relWidth<=1200){
			oHeader.css({
				top:'-62.5%',
				opacity:'0',
			
			});
			oFooter.css({
				top:'120%',
				opacity:'0',
	
			});
		}else if(relWidth<=1366){
			oHeader.css({
				top:'-62.5%',
				opacity:'0',
		
			});
			oFooter.css({
				top:'108%',
				opacity:'0',
		
			});
		}else if(relWidth<=1600){
			oHeader.css({
				top:'-64.5%',
				opacity:'0'
			});
			oFooter.css({
				top:'106%',
				opacity:'0'
			});
		}else if(relWidth<=1920){
			oHeader.css({
				top:'-71.5%',
				opacity:'0'
			});
			oFooter.css({
				top:'100%',
				opacity:'0'
			});
		}
		$(this).hide();
	});


	


	//right Menu
	var off=true;
	var oMenu=$('.rigth_menu');
	var oBtnHide=$('.hidden_menu');

	oBtnHide.on('click',function(){
		if(off){
			oMenu.animate({
				'margin-right':'-50'
			},500);
			$(this).css({
				'background':'url("img/suspension_window/open.png") no-repeat',
				'width':'28',
				'height':'28',
				'background-size':'100%'
			});
		}
		else{
			oMenu.animate({
				'margin-right':'0'
			},500);
			$(this).css({
				'background':'url("img/suspension_window/close.png") no-repeat',
				'width':'28',
				'height':'28',
				'background-size':'100%'
			});
		}

		off=!off;
	})

	var aTips=$('.rigth_menu_container').children();
	var pageNum=1;

	function getPageNum(ev){
		var ev=ev||event;
		var bState=null;

		if(ev.wheelDelta){
			bState=ev.wheelDelta>0?true:false;
		}else{
			bState=ev.detail<0?true:false;
		}

		if(bState){
			pageNum=parseInt(window.location.hash.substr(-1,1));
		}else{
			pageNum=parseInt(window.location.hash.substr(-1,1));
		}

		if(ev.preventDefault){
			ev.preventDefault();
		}

		return false;
		
	}

	window.onmousewheel=getPageNum;
	
	if(window.addEventListener){
		window.addEventListener('DOMMouseScroll',getPageNum,false);
	}
	


	aTips.each(function(index,aElem){
		if(index!=0&&index!=4){
			$(this).mouseover(function(){
				$('.rigth_menu_hover'+index).animate({'right':50}).mouseover(function(){
					$(this).stop(true).css({'right':50});
				});
			});

			$(this).mouseout(function(){
				$('.rigth_menu_hover'+index).delay(100).animate({'right':-190}).mouseout(function(){
					$(this).animate({'right':-190})
				});
			
			});
		}

		if(index==0){
			$(this).click(function(){
				if(pageNum!=1){
					$(this).attr({'href':'#section'+(--pageNum)});
				}
			});
		}

		if(index==4){
			$(this).click(function(){
				if(pageNum!=6){
					$(this).attr({'href':'#section'+(++pageNum)});
				}
			});
		}

	});
	
	
	
	
});