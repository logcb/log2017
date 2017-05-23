window.onload = function(){

$('.hover-red').hover(function(){
    $('body').css('background-color', '#d32222');
},function(){
    $('body').css('background-color', '');
});
$('.hover-green').hover(function(){
    $('body').css('background-color', '#0c7324');
},function(){
    $('body').css('background-color', '');
});
$('.hover-blue').hover(function(){
    $('body').css('background-color', '#1042c0');
},function(){
    $('body').css('background-color', '');
});
$('.hover-yellow').hover(function(){
    $('body').css('background-color', '#efbc00');
},function(){
    $('body').css('background-color', '');
});
$('.hover-grey').hover(function(){
    $('body').css('background-color', '#a8aab0');
},function(){
    $('body').css('background-color', '');
});

};