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

//确认对话框
function confirm_dialog(){

}
