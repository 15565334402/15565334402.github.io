/**
 * Created by Administrator on 2016/7/19 0019.
 */
$(function(){
    init_menu();
})
function init_menu() {
    $(".shortCut").on("click", function () {
       $(".menu1").toggle();
    })
    $(".new-info").on("click", function () {
        $(".menu2").toggle();
    })
    $(".manage").on("click", function () {
        $(".right").show();
        $(".managePage").removeClass("tab ul li a").addClass("hover")
    })
}