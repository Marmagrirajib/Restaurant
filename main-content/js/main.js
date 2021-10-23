$(document).ready(function () {
    // food menu section slider 
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:30,
        autoplayTimeout:2000,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1200:{
                items:4,
            }
        }
    });

// wow.js 

new WOW().init();


// top btn
$(".top-btn").click(function(){
    $("html, body").animate({
        scrollTop:0
    },3000)
})

// top btn hide jq
$(window).scroll(function(){
  var ourwindow=$(this).scrollTop();
$('.top-btn').hide();
  if(ourwindow<200){
      $(".top-btn").fadeOut();
  }
  else{
      $(".top-btn").fadeIn();
  }
});


// smoth work
$("a").on('click',function(slow){
   if(this.hash !== " "){
       slow.preventDefault();

       var hash=this.hash;
       $("html, body").animate({
           scrollTop:$(hash).offset().top
       },800,function(){
           window.location=hash;
       } 
       );
   }
})


});



var lodercontent=document.querySelector(".loder");
function myloder(){
  lodercontent.classList.add("loder-none")
}

alert("Hey Do You Know That? It Is Demo Web tamplate Created By Developer Rajib Marmagri");