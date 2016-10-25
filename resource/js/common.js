/**
 * Created by Administrator on 2016/9/22.
 */
//多选
function multiSelect(tar){
    if($(tar).hasClass('gg')){
        $(tar).removeClass("gg");
    }else{
        $(tar).addClass("gg");
    }

}
function singleSelect(tar){
        var siblings = $(tar).siblings();
    if($(tar).hasClass('gg')){
        $(tar).removeClass("gg");
    }else{
        for(var i=0;i<siblings.length;i++){
            $(siblings[i]).removeClass('gg');
        }
        $(tar).addClass('gg');
    }
}
//js处理文本溢出
function ellipsis(str, len) {
    //length属性读出来的汉字长度为1
    str=str.replace(/[\n]/ig,'');
    if(str.length*2 <= len) {
        return str;
    }
    var strlen = 0;
    var s = "";
    for(var i = 0;i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
            strlen = strlen + 2;
            if(strlen >= len){
                return s.substring(0,s.length-1) + "...";
            }
        } else {
            strlen = strlen + 1;
            if(strlen >= len){
                return s.substring(0,s.length-2) + "...";
            }
        }
    }
    return s;
}
//确认对话框
function confirm_dialog(){

}
