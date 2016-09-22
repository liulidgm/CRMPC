/**
 * Created by Administrator on 2016/9/22.
 */
//∂‡—°
function multiSelect(tar){
    if($(tar).hasClass('gg')){
        $(tar).removeClass("gg");
    }else{
        $(tar).addClass("gg");
    }

}
function singleSelect(){
    var siblings = $(this).siblings();
    if($(this).hasClass('gg')){
        $(this).removeClass("gg");
    }else{
        for(var i=0;i<siblings.length;i++){
            $(siblings[i]).removeClass('gg');
        }
        $(this).addClass('gg');
    }


}
