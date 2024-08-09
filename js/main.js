$(function(){
    //pop btn

    $(".p_btn").click(function(){
        $(".up_pop").hide();
    })
    $(".logo").click(function(){
        $(".up_pop").show();
    })

    $(".pbtn2").click(function(){
        $(".center_pop").hide();
    })
    $(".logo").click(function(){
        $(".center_pop").show();
    })



    //
    // $(".m_sub_img").fadeIn();
    // $(".m_logo").hide()
    
    // $(".main_img").hover(function(){
    //     $(".m_sub_img").fadeIn();
    //     $(".m_logo").hide()
    // } ,function(){
    //     $(".m_sub_img").fadeOut();
    //     $(".m_logo").slideDown()
    // })    //

    // $("#Graceful_Studio").fullpage({
    //     sectionsColor:["pink"],
        
    //     slidesNavigation:true,
    //     slidesNavPosition:"top"
        
    // })

    //

    // $("#gallery").fullpage({
    //         sectionsColor:["gray","blue","green","gray"],
    //         slidesNavigation:true,
    //         slidesNavPosition:"top"
            
    //     })
    
    // $(".m_sub_img li").hover(function(){
    //     $(this).siblings().addClass("ani");
    //     console.log("sdfsdfs")
    // }, function(){
    //     $(this).siblings().removeClass("ani");
    // })//
    

    $(".m_sub_img li").each(function(i){
        $(this).delay(i*300).addClass("ani");
        console.log(this)
    })
    
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>450){
            $(".g_img1 li ").slideDown("fast")
        }else{
            $(".g_img1 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>850){
            $(".g_img2 li ").slideDown("fast")
        }else{
            $(".g_img2 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>1250){
            $(".g_img3 li ").slideDown("fast")
        }else{
            $(".g_img3 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>1650){
            $(".g_img4 li ").slideDown("fast")
        }else{
            $(".g_img4 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>2000){
            $(".g_img5 li ").slideDown("fast")
        }else{
            $(".g_img5 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>2450){
            $(".g_img6 li ").slideDown("fast")
        }else{
            $(".g_img6 li").slideUp()
        }

        console.log(top)
    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>2850){
            $(".g_img7 li ").slideDown("fast")
        }else{
            $(".g_img 7 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>3250){
            $(".g_img8 li ").slideDown("fast")
        }else{
            $(".g_img8 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>3650){
            $(".g_img9 li ").slideDown("fast")
        }else{
            $(".g_img9 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>4000){
            $(".g_img10 li ").slideDown("fast")
        }else{
            $(".g_img10 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>4450){
            $(".g_img11 li ").slideDown("fast")
        }else{
            $(".g_img11 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>4850){
            $(".g_img12 li ").slideDown("fast")
        }else{
            $(".g_img12 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>5200){
            $(".g_img13 li ").slideDown("fast")
        }else{
            $(".g_img13 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>6000){
            $(".g_img14 li ").slideDown("fast")
        }else{
            $(".g_img14 li").slideUp()
        }

    })
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top>6700){
            $(".g_img15li ").slideDown("fast")
        }else{
            $(".g_img15 li").slideUp()
        }

    })
    console.log(top)
    

    
    
})//