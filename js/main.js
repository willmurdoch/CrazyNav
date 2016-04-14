$('.circleNav li').click(function(){
	var focus = $('.circleNav li');
    var cNav = $(this).parents('.circleNav').children();
    if(!cNav.hasClass('open')){
		cNav.addClass('open');
		focus.addClass('transitioning');
		setTimeout(function(){
			focus.removeClass('transitioning');
		},1000);
	}
	else{
		cNav.removeClass('open');
		focus.addClass('transitioning');
		setTimeout(function(){
			focus.removeClass('transitioning');
		},1000);
	}
	
});
