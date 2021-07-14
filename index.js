if($(window).width()<480){
    $('.header-body>.right>img').attr('src','images/image-intro-mobile.jpg');
    $('.pattern2').attr('src','images/bg-pattern-intro-right-mobile.svg');
}
$('#icon').click(()=>{
    if($('.navbar').attr('class')=="navbar"){
        $('.navbar').attr('class','navbar responsive');
        $('#icon').attr('src','images/icon-close.svg');
    }else{
        $('.navbar').attr('class','navbar');
        $('#icon').attr('src','images/icon-hamburger.svg');
    }
})