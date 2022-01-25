// ----------------section1------------------
$(function(){  

  $(".left").click(function () {
    $(".sec1_slide li:last").prependTo(".sec1_slide");
    $(".sec1_slide").css({ marginLeft: -368 });
    $(".sec1_slide").stop().animate({ marginLeft: 0 }, 300);
  });

  $(".right").click(function () {
    $(".sec1_slide").stop().animate({ marginLeft: -368 }, 300, function () {
      $(".sec1_slide li:first").appendTo(".sec1_slide");
      $(".sec1_slide").css({ marginLeft: 0 });  
    });
  });

  function slide(){
    $(".sec1_slide").stop().animate({ marginLeft: -368 }, 300, function () {
      $(".sec1_slide li:first").appendTo(".sec1_slide");
      $(".sec1_slide").css({ marginLeft: 0 });  
    });
  }

  setInterval(slide, 3000);
});

// ----------------section3------------------
$(function() {
  $(".sec3_box_1").fadeIn();
    $('.sec3_nav>li:nth-of-type(1)').click(function() {               
      $('li').removeClass("active");
        $(this).addClass("active");
        $(".sec3_box_1").show();
        $(".sec3_box_2").css("display","none");
        $(".sec3_box_3").css("display","none");
        $(".sec3_box_4").css("display","none");
        $(".sec3_box_5").css("display","none");
        $(".sec3_box_6").css("display","none");
    });
    $('.sec3_nav>li:nth-of-type(2)').click(function() {
      $('li').removeClass("active");
        $(this).addClass("active");
        $(".sec3_box_1").css("display","none");
        $(".sec3_box_2").css("display","flex");
        $(".sec3_box_3").css("display","none");
        $(".sec3_box_4").css("display","none");
        $(".sec3_box_5").css("display","none");
        $(".sec3_box_6").css("display","none");
    });
    $('.sec3_nav>li:nth-of-type(3)').click(function() {
      $('li').removeClass("active");
        $(this).addClass("active");
        $(".sec3_box_1").css("display","none");
        $(".sec3_box_2").css("display","none");
        $(".sec3_box_3").css("display","flex");
        $(".sec3_box_4").css("display","none");
        $(".sec3_box_5").css("display","none");
        $(".sec3_box_6").css("display","none");
    });
    $('.sec3_nav>li:nth-of-type(4)').click(function() {
      $('li').removeClass("active");
        $(this).addClass("active");
        $(".sec3_box_1").css("display","none");
        $(".sec3_box_2").css("display","none");
        $(".sec3_box_3").css("display","none");
        $(".sec3_box_4").css("display","flex");
        $(".sec3_box_5").css("display","none");
        $(".sec3_box_6").css("display","none");
    });
    $('.sec3_nav>li:nth-of-type(5)').click(function() {
      $('li').removeClass("active");
        $(this).addClass("active");
        $(".sec3_box_1").css("display","none");
        $(".sec3_box_2").css("display","none");
        $(".sec3_box_3").css("display","none");
        $(".sec3_box_4").css("display","none");
        $(".sec3_box_5").css("display","flex");
        $(".sec3_box_6").css("display","none");
    });
    $('.sec3_nav>li:nth-of-type(6)').click(function() {
      $('li').removeClass("active");
        $(this).addClass("active");
        $(".sec3_box_1").css("display","none");
        $(".sec3_box_2").css("display","none");
        $(".sec3_box_3").css("display","none");
        $(".sec3_box_4").css("display","none");
        $(".sec3_box_5").css("display","none");
        $(".sec3_box_6").css("display","flex");
    });
});