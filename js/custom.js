$(document).ready(function(){
    $('nav .nav-list ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $("#vdo").YTPlayer();
});