$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점" },
    headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
    .done(function (msg) {
        $(".sec1_box_1").prepend("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".sec1_box_1>.box1").children(".box1_text").append("<h3>" + msg.documents[0].title + "</h3>");
        $(".sec1_box_1>.box1").children(".box1_text").append("<p>" + msg.documents[0].authors + "</p>");
        $(".sec1_box_1>.box1").children(".box1_text").append("<p>" + msg.documents[0].publisher + "</p>");
    });
// -----------메모장 책정보------------

    $(function(){
        $.get("./sub_txt/txt1.txt", function (data){
            $(".info_box1").html(data);
        })
    });

    $(function(){
        $.get("./sub_txt/txt2.txt", function (data){
            $(".info_box2").html(data);
        })
    });

    $(function(){
        $.get("./sub_txt/txt3.txt", function (data){
            $(".info_box3").html(data);
        })
    });

// --------------------로그인후 이용가능----------------------
$(document).ready(function () {
    $('.sec1_purchase>p').click(function () {
      alert("로그인이 필요한 서비스입니다.")
    });
    $('.comment_a').click(function () {
        alert("로그인후 작성 가능합니다.")
      });
});
// --------------------------추천----------------------
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "김호연" },
    headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
  })
      .done(function (msg) {
        var boxs = document.getElementsByClassName('box');
        for (var i = 0; i < boxs.length; i++) {
          $(".sec3_box_3_1>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
          $(".sec3_box_3_1>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
          $(".sec3_box_3_1>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소설" },
    headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
  })
      .done(function (msg) {
        var boxs = document.getElementsByClassName('box');
        for (var i = 0; i < boxs.length; i++) {
          $(".sec3_box_3_2>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
          $(".sec3_box_3_2>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
          $(".sec3_box_3_2>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "우리" },
    headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
  })
      .done(function (msg) {
        var boxs = document.getElementsByClassName('box');
        for (var i = 0; i < boxs.length; i++) {
          $(".sec3_box_3_3>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
          $(".sec3_box_3_3>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
          $(".sec3_box_3_3>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "내 편" },
    headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
  })
      .done(function (msg) {
        var boxs = document.getElementsByClassName('box');
        for (var i = 0; i < boxs.length; i++) {
          $(".sec3_box_3_4>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
          $(".sec3_box_3_4>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
          $(".sec3_box_3_4>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
        }
    });

// -----------메뉴이동--------------
$(function () {
    $(".sec2_box_1").fadeIn();
    $('.sec2_nav_ul>li:nth-of-type(1)').click(function () {
      $('li').removeClass("active");
      $(this).addClass("active");
      $(".sec2_box_1").show();
      $(".sec2_box_2").hide();
      $(".sec2_box_3").hide();
    });
    $('.sec2_nav_ul>li:nth-of-type(2)').click(function () {
      $('li').removeClass("active");
      $(this).addClass("active");
      $(".sec2_box_1").hide();
      $(".sec2_box_2").show();
      $(".sec2_box_3").hide();
    });
    $('.sec2_nav_ul>li:nth-of-type(3)').click(function () {
      $('li').removeClass("active");
      $(this).addClass("active");
      $(".sec2_box_1").hide();
      $(".sec2_box_2").hide();
      $(".sec2_box_3").show();
    });
  });
  
