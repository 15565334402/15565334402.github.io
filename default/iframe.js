/**
 * Created by Administrator on 2016/8/31 0031.
 */
$(function(){
    pageFunc();
    init_page();
    callChild();
    init_dropMenu();
})
function pageFunc(){
    console.log("调用父层函数成功！")
}
function callChild(){
   $("#iframe").contentWindow.page1();
}
function init_page(){
    $(".menu2").on("click",function(){
        $(this).addClass("change").siblings().removeClass("change").parent(".drowmenu").siblings().find(".menu2").removeClass("change");
        var src=$(this).attr("iframesrc");
        $("#iframe").attr("src",src);
    })
}
function init_dropMenu(){
    $(".menu1").on("click",function(){
       if($(this).next().children(".menu2").css("display")=="none"){
           $(this).next().children(".menu2").css("display","block");
           $(this).addClass("menuhover").siblings().removeClass("menuhover");
       }else {
           $(this).next().children(".menu2").css("display","none");
       }
        })
}
