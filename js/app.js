$(function(){

// PRELOADER SECTION

let preloader = $(`.preloader`)

$(window).load(function(){
     preloader.delay(250).fadeOut()
})





// BACK TO TOP BUTTON

     let backToTopBtn = $(`.backToTop`)

     backToTopBtn.click(function(){

       $(`html,body`).animate({

          scrollTop: 0
       },1000)

     })


// MENU FIXED

         let navbar = $(`.navbar`)
         let navbarTopspace = navbar.offset().top

         $(window).scroll(function(){
        
// SCROLL TOP

         let scrTop = $(window).scrollTop()
                 console.log(scrTop)
         if(scrTop > navbarTopspace){
           navbar.addClass(`menuFixed`)
         } else{
            navbar.removeClass(`menuFixed`)
         }

// BACK TO TOP BUTTON APPEAR

if(scrTop > 770){

     backToTopBtn.fadeIn()
} else {
     backToTopBtn.fadeOut()
}



    })
})