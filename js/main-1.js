$(function(){  

     $(".m_sub_img li").mouseover(function(){
         ran = Math.random() *3;
        $(this).siblings().animate({transform:"rotate("+ ran + "deg)"}, 300).animate({transform:"rotate("+ -ran + "deg)"},300);   
     })
    
    
    
    
})//