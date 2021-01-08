$('#myCarousel').fadeOut();
$('.infotext.hovertext').slideUp();
$('#caro1').slideUp();
$('#caro2').slideUp();
$('#caro3').slideUp();
//Landing page scroll
$('.fullBackground').fullClip({
    images: [   "images/DDash/1.png",
                "images/3D/room1.jpg",
                "images/landingpage/Code1.png",
                "images/landingpage/PDW1.png",
                "images/landingpage/Wireframe1.png",
                "images/3D/room2.png",
                "images/landingpage/Code2.png",
                "images/tWars/tank2.png",
                "images/landingpage/PDW2.png",
                "images/3D/room3.png",
                "images/landingpage/Code3.png",
                "images/landingpage/PDW3.png",],
            transistionTime: 2000,
            wait: 5000
});

//Title typing 
var typedwelcome = new Typed('#typename', {
    strings: ["Abid Asab."],
    typeSpeed: 50,

  });

var typedwelcome = new Typed('#typedid', {
    strings: ["Hello.", "Welcome to my Website."],
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true
  });

//Programming box interaction

$(".controlbox.open").hover(
    function()
    {
        $(this).find(".infotext").slideDown().animate({'margin-top': '-85px'},'fast');
        $(this).find(".dot").animate({'opacity': '0'}, 'fast').delay(10).slideUp();
    },function()
    {
        $(this).find(".infotext").slideUp(); 
        $(this).find(".dot").slideDown().delay(100).animate({'opacity': '100'}, '1400');
    }
)


// Controlbox interaction
$(".controlbox.interactive").hover(
    function()
    {
        
        $(this).animate
        ({
            backgroundColor: 'whitesmoke',
            color: '#262626'
        });
        $(this).find(".infointeractive").animate
        ({
            backgroundColor: 'whitesmoke'
        });
    },function()
    {
        $(this).animate
        ({
            backgroundColor: '#262626',
            color: 'white'
        });
        $(this).find(".infointeractive").animate
        ({
            backgroundColor: '#262626'
        });
    }
);

//Carousel image switch
function viewImg(val){
   if(val == 0)
   {    
    $('#caro3').slideUp();
    $('#caro2').slideUp();
    $('#caro1').delay(500).slideDown("medium");
   }
   if(val == 1)
   {
    $('#caro3').slideUp();
    $('#caro1').slideUp();
    $('#caro2').delay(500).slideDown("medium");
   }
   if(val == 2)
   {
    $('#caro1').slideUp();
    $('#caro2').slideUp();
    $('#caro3').delay(500).slideDown("medium");
   }
   
}

//Manages the carousel
$('.owl-carousel').owlCarousel({
    autoHeight:true,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplaySpeed:700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
    }
})

$('.owl-prev').css({'font-size': '60px', 'margin-right': '25%'});
$('.owl-next').css({'font-size': '60px'});