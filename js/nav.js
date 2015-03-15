$(function(){
	var index = $('#nav>ul .active').index();
	$('#nav>ul>li').hover(function(){
		$('#nav>ul>li').removeClass('active');
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
		$('#nav>ul>li').eq(index).addClass('active');
	});

	$('#login').click(function(){
		$('#login_form').css('zIndex','99');
	});
	$('#login_form i').eq(1).click(function(){
		$('#login_form').css('zIndex','-1');
		$('#username').val('');
		$('#password').val('');
	});

});
$(window).scroll(function(){
	$('.header').css({
		"position":"fixed",
		"top":"0"
	});
});
