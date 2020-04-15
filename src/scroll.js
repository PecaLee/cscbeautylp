$(document).ready(function(){
    $('.button').click(function(){
        var offset = $('#form').offset(); 
        $('html').animate({scrollTop : offset.top}, 400);
    });
});