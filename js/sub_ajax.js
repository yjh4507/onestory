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
