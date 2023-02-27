const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".nabar_js");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});


$('#riobel').hover(
     function () {
       $('#riobel_bg').addClass('active');
       $('#riobel_logo').addClass('active');
       $('#default_logo').removeClass('active');
     }, 
     function () {
       $('#riobel_bg').removeClass('active');
       $('#riobel_logo').removeClass('active');
       $('#default_logo').addClass('active');
     }
);
$('#shaws').hover(
     function () {
       $('#shaws_bg').addClass('active');
       $('#shaws_logo').addClass('active');
       $('#default_logo').removeClass('active');
     }, 
     function () {
       $('#shaws_bg').removeClass('active');
       $('#shaws_logo').removeClass('active');
       $('#default_logo').addClass('active');
     }
);

$('#perrin-and-rowe').hover(
     function () {
       $('#perrin-and-rowe_bg').addClass('active');
       $('#perrin-and-rowe_logo').addClass('active');
       $('#default_logo').removeClass('active');
     }, 
     function () {
       $('#perrin-and-rowe_bg').removeClass('active');
       $('#perrin-and-rowe_logo').removeClass('active');
       $('#default_logo').addClass('active');
     }
);
$('#rohl').hover(
     function () {
       $('#rohl_bg').addClass('active');
       $('#rohl_logo').addClass('active');
       $('#default_logo').removeClass('active');
     }, 
     function () {
       $('#rohl_bg').removeClass('active');
       $('#rohl_logo').removeClass('active');
       $('#default_logo').addClass('active');
     }
);

$('#victoria-plus-albert').hover(
     function () {
       $('#victoria-plus-albert_bg').addClass('active');
       $('#victoria-plus-albert_logo').addClass('active');
       $('#default_logo').removeClass('active');
     }, 
     function () {
       $('#victoria-plus-albert_bg').removeClass('active');
       $('#victoria-plus-albert_logo').removeClass('active');
       $('#default_logo').addClass('active');
     }
);

// nav bar er jonno

$('#nav_riobel').hover(
     function () {
       $('#nav_bg_riobel').addClass('active');
     }, 
     function () {
       $('#nav_bg_riobel').removeClass('active');
     }
);


$('#nav_perrin-and-rowe').hover(
     function () {
       $('#nav_bg_perrin-and-rowe').addClass('active');
     }, 
     function () {
       $('#nav_bg_perrin-and-rowe').removeClass('active');
     }
);

$('#nav_shaws').hover(
     function () {
       $('#nav_bg_shaws').addClass('active');
     }, 
     function () {
       $('#nav_bg_shaws').removeClass('active');
     }
);

$('#nav_rohl').hover(
     function () {
       $('#nav_bg_rohl').addClass('active');
     }, 
     function () {
       $('#nav_bg_rohl').removeClass('active');
     }
);

$('#nav_victoria-plus-albert').hover(
     function () {
       $('#nav_bg_victoria-plus-albert').addClass('active');
     }, 
     function () {
       $('#nav_bg_victoria-plus-albert').removeClass('active');
     }
);

//brand logo 

$('#brand_riobel-showcase').hover(
     function () {
       $('#nav_bg_riobel-showcase').addClass('active');
     }, 
     function () {
       $('#nav_bg_riobel-showcase').removeClass('active');
     }
);


$('#brand_perrin-and-rowe-showcase').hover(
     function () {
       $('#nav_bg_perrin-and-rowe-showcase').addClass('active');
     }, 
     function () {
       $('#nav_bg_perrin-and-rowe-showcase').removeClass('active');
     }
);


$('#brand_shaws-showcase').hover(
     function () {
       $('#nav_bg_shaws-showcase').addClass('active');
     }, 
     function () {
       $('#nav_bg_shaws-showcase').removeClass('active');
     }
);

$('#brand_rohl-showcase').hover(
     function () {
       $('#nav_bg_rohl-showcase').addClass('active');
     }, 
     function () {
       $('#nav_bg_rohl-showcase').removeClass('active');
     }
);

$('#brand_victoria-plus-albert-showcase').hover(
     function () {
       $('#nav_bg_victoria-plus-albert-showcase').addClass('active');
     }, 
     function () {
       $('#nav_bg_victoria-plus-albert-showcase').removeClass('active');
     }
);


// pointer click function

$("#pointer_one_dot").on('click',function(){
    $("#pointer_one_popup").toggleClass("active");
    $("#pointer_one_dot").toggleClass("active");
});
$("#pointer_two_dot").on('click',function(){
    $("#pointer_two_popup").toggleClass("active");
    $("#pointer_two_dot").toggleClass("active");
});
$("#pointer_three_dot").on('click',function(){
    $("#pointer_three_popup").toggleClass("active");
    $("#pointer_three_dot").toggleClass("active");
});
$("#pointer_four_dot").on('click',function(){
    $("#pointer_four_popup").toggleClass("active");
    $("#pointer_four_dot").toggleClass("active");
});
$("#pointer_five_dot").on('click',function(){
    $("#pointer_five_popup").toggleClass("active");
    $("#pointer_five_dot").toggleClass("active");
});





