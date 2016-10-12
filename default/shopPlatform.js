/**
 * Created by Administrator on 2016/9/7 0007.
 */
$(function() {
    dropdown();
    init_page();
    init_login();
    init_register();
    });
function dropdown(){
    $(".PM").on("click",function(){
     if( $(this).next().css("display")=="none"){
         $(this).next().show();
     }else{
         $(this).next().hide();
     }
    })
};
function init_page(){
$(".drop div").on("click",function(){
    var src=$(this).attr("iframesrc");
    $(this).addClass("hover").siblings().removeClass("hover");
    $(this).parent().siblings().children().removeClass("hover");
    $("#iframe").attr("src",src);
})
}
function init_login(){
    $(".login").click(function(){
        location.href="user-login.html"
    })
}
function init_register(){
    $(".register").click(function(){
        location.href="user-register.html"
    })
}
