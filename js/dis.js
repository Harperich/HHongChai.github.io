

$(function(){
    $('.main').show(1000,'linear')
    $('.t_left').click(function(){
        $('.c_mask').fadeIn()
    })
    $('.t_right').click(function(){
        $('.c_mask').hide() 

    })
  

})
    var index=0;
    // 下一张
    function next_pic(){
        index++;    
        if(index>3){
            index=0;
        }
        addStyle();
    } 
    // 控制图片显示隐藏,小圆点背景色
    function addStyle(){
        $(".contain img").eq(index).fadeIn();
        $(".contain img").eq(index).siblings().fadeOut();
        $(".btn span").eq(index).addClass("actives");
        $(".btn span").eq(index).siblings().removeClass("actives");
    }
    // 自动轮播
    var id;
    autoplay();
    function autoplay(){
        id = setInterval(function(){
            next_pic();
        },1000)
    }

