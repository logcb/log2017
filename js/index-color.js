window.onload = function(){

$('.hover-red').hover(function(){
    $('body').css('background-color', '#bc1d1d');
},function(){
    $('body').css('background-color', '');
});
$('.hover-green').hover(function(){
    $('body').css('background-color', '#224e09');
},function(){
    $('body').css('background-color', '');
});
$('.hover-blue').hover(function(){
    $('body').css('background-color', '#232a9a');
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