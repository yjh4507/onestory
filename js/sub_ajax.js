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
// -----------책정보------------

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

// ---------아코디언-------------
// $("h4.h4title1").on('click',function(){
//     $(this).next(".con").slideToggle(100);
// });

// $('h4.h4title1').on('click', function () {

//     if ($(this).hasClass('on')) {
//         slideUp();
//     } else {
//         slideUp();
//         $(this).addClass('on').next().slideDown();
//     }
//     function slideUp() {
//         $('h4.h4title1').removeClass('on').next().slideUp();
//     };
// })