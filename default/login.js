/**
 * Created by Administrator on 2016/8/3 0003.
 */
$(function (){
    init_login();
});
function init_login(){
    $(".login-btn").on("click",function(){
        var username=$(".username .value").find("input").val();
        var password=$(".password .value").find("input").val();
        init_login_in(username,password);
    })
}
function  init_login_in(username,password) {
    var user = { "user1": "aaaaaa", "user2": "bbbbbb", "user3": "cccccc"};
    if(user[username]){
        if(user[username]==password ){
            location.href="index.html"
        }else{
            $(".info").show().html("密码错误！")
        }
    }
    else{
        $(".info").show().html("账号不存在！")
    }
}
