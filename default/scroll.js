/**
 * Created by Administrator on 2016/8/12 0012.
 */
$(function(){
    init_tab();
    init_scroll();
})
function init_tab(){
    $("ul li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
        var tab=$(this).attr("title")
        $("."+tab).show().siblings().hide()
    })
}