/**
 * Created by Administrator on 2016/9/22.
 */
//��ѡ
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
//js�����ı����
function ellipsis(str, len) {
    //length���Զ������ĺ��ֳ���Ϊ1
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
//ȷ�϶Ի���
function confirm_dialog(){

}
