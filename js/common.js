$(function(){
    $('.btns').click(function(){
        if($(this).hasClass('pause')){
            $(this).html('&#xe600;')
            $(this).css({
                "color":'#fff'
            })
            $(this).removeClass('pause')
        }else{
            $(this).html('&#xe624;')
            $(this).css({
                "color":'#ccc'
            })  
            $(this).addClass('pause')
        }
        
        
    })
    $('.back').click(function(){
        window.history.back()
    })
    $('.disnone').show(500,'linear')
    setTimeout(() => {
        $('.disnone').fadeOut()
    }, 500);
    $('.detailss').click(function(){
        window.location.href = "./sing.html"
    })
    $('.c_mask').click(function(){
        $('.c_mask').hide()
    })
})