// 금주의 베스트셀러--------------------------

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "인생" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
      $(".sec2_box_1>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec2_box_1>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec2_box_1>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

// 오늘의 추천도서---------------------------
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "100가지 아이디어 노하우" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    $(".sec2_box_2>.box2-1").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-1").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-1").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "2050 수소에너지" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    $(".sec2_box_2>.box2-2").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-2").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-2").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "우리, 아파트 딱 100채만" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    $(".sec2_box_2>.box2-3").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-3").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-3").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "1일 1단어 1분으로" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    $(".sec2_box_2>.box2-4").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-4").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-4").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "소수점 투자" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    $(".sec2_box_2>.box2-5").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-5").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-5").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "존재하지 않는 것" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    $(".sec2_box_2>.box2-6").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-6").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-6").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "와인 올 더 타임" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    $(".sec2_box_2>.box2-7").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-7").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-7").append("<p>" + msg.documents[0].authors + "</p>");
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "당신을 위한 클래식" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})
  .done(function (msg) {
    console.log(msg);
    $(".sec2_box_2>.box2-8").append("<img src ='" + msg.documents[0].thumbnail + "'/>");
    $(".sec2_box_2>.box2-8").append("<h4>" + msg.documents[0].title + "</h4>");
    $(".sec2_box_2>.box2-8").append("<p>" + msg.documents[0].authors + "</p>");
  });

// 당신이 원하는 '22년 大運---------------------------
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "운" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {

      $(".sec2_box_3>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec2_box_3>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec2_box_3>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

// 당신이 원하는 22년 재테크 완전정복---------------------------
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "투자" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {

      $(".sec2_box_4>.box").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec2_box_4>.box").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec2_box_4>.box").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

// 오늘의 랭킹--------------------------
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "에세이" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
      $(".sec3_box_1>.box3").eq(i).prepend("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec3_box_1>.box3").eq(i).children(".box3_text").append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec3_box_1>.box3").eq(i).children(".box3_text").append("<p>" + msg.documents[i].authors + "</p>");
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
      $(".sec3_box_2>.box3").eq(i).prepend("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec3_box_2>.box3").eq(i).children(".box3_text").append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec3_box_2>.box3").eq(i).children(".box3_text").append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "경제" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
      $(".sec3_box_3>.box3").eq(i).prepend("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec3_box_3>.box3").eq(i).children(".box3_text").append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec3_box_3>.box3").eq(i).children(".box3_text").append("<p>" + msg.documents[i].authors + "</p>");
    }
  });
  
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "건강의학" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
      $(".sec3_box_4>.box3").eq(i).prepend("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec3_box_4>.box3").eq(i).children(".box3_text").append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec3_box_4>.box3").eq(i).children(".box3_text").append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "여행" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
      $(".sec3_box_5>.box3").eq(i).prepend("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec3_box_5>.box3").eq(i).children(".box3_text").append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec3_box_5>.box3").eq(i).children(".box3_text").append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "오디오북" },
  headers: { Authorization: "KakaoAK 04506107d704df28638f24857e3ad74b" }
})

  .done(function (msg) {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
      $(".sec3_box_6>.box3").eq(i).prepend("<img src ='" + msg.documents[i].thumbnail + "'/>");
      $(".sec3_box_6>.box3").eq(i).children(".box3_text").append("<h4>" + msg.documents[i].title + "</h4>");
      $(".sec3_box_6>.box3").eq(i).children(".box3_text").append("<p>" + msg.documents[i].authors + "</p>");
    }
  });
