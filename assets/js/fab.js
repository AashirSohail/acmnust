var x = $('.FAB__mini-action-button').find('.mini-action-button--hide').length * 60 + 60;

$('.FAB').hover(function(){
	$('.FAB').height(x);
}, function(){
	$('.mini-action-button--show').attr('class', 'mini-action-button--hide');
	$('.FAB').height(0);
});

$('.mini-action-button').hover(function(){
	$(this).find('.mini-action-button__text--hide').attr('class', 'mini-action-button__text--show');
}, function(){
	$(this).find('.mini-action-button__text--show').attr('class', 'mini-action-button__text--hide');
});

$('.FAB__action-button').hover(function(){
	$(this).find('.action-button__text--hide').attr('class', 'action-button__text--show');
	$('.mini-action-button--hide').attr('class', 'mini-action-button--show');
}, function(){
	$(this).find('.action-button__text--show').attr('class', 'action-button__text--hide');
});