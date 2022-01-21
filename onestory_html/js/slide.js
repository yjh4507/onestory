$(function () {
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
});

// 3시간마다 무료---------------------------

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "무협 " },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
      var str = msg.documents[i].title;
      var str2 = str.substring(0, 10);

      console.log(msg.documents[0].title);
      console.log(msg.documents[0].thumbnail);
      $(".sec2_box_1>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec2_box_1>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec2_box_1>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

// 인기작가연재---------------------------
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
      var str = msg.documents[i].title;
      var str2 = str.substring(0, 10);

      console.log(msg.documents[0].title);
      console.log(msg.documents[0].thumbnail);
      $(".sec2_box_2>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec2_box_2>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec2_box_2>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

// 인기작가연재---------------------------
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "조선남자" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    console.log(msg);
    $(".sec2_box_2>.box2-1").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-1").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-1").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "나 홀로 이세계" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    console.log(msg);
    $(".sec2_box_2>.box2-2").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-2").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-2").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "실연당했는데" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    console.log(msg);
    $(".sec2_box_2>.box2-3").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-3").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-3").append("<p>" + msg.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "신촌역 마법사는" },
    headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
  })
    .done(function (msg) {
      console.log(msg);
      $(".sec2_box_2>.box2-4").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
      $(".sec2_box_2>.box2-4").append("<h4>" + msg.documents[0].title + "</h4>");
      $(".sec2_box_2>.box2-4").append("<p>" + msg.documents[0].authors + "</p>");
    });

    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "과거 속의 그녀" },
      headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
    })
      .done(function (msg) {
        console.log(msg);
        $(".sec2_box_2>.box2-5").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
        $(".sec2_box_2>.box2-5").append("<h4>" + msg.documents[0].title + "</h4>");
        $(".sec2_box_2>.box2-5").append("<p>" + msg.documents[0].authors + "</p>");
      });
  
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "비의 소년" },
        headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
      })
        .done(function (msg) {
          console.log(msg);
          $(".sec2_box_2>.box2-6").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
          $(".sec2_box_2>.box2-6").append("<h4>" + msg.documents[0].title + "</h4>");
          $(".sec2_box_2>.box2-6").append("<p>" + msg.documents[0].authors + "</p>");
        });

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "재성원령기" },
          headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
        })
          .done(function (msg) {
            console.log(msg);
            $(".sec2_box_2>.box2-7").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
            $(".sec2_box_2>.box2-7").append("<h4>" + msg.documents[0].title + "</h4>");
            $(".sec2_box_2>.box2-7").append("<p>" + msg.documents[0].authors + "</p>");
          });
