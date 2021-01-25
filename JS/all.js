$(document).ready(function() {
    /*漢堡選單*/
    $('.dropdown').click(function(event) {
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.open').slideToggle();
    });
    $('.hamburger').click(function(event) {
        event.preventDefault();
        $('.hamburger').toggleClass('active');
        $('.menu').slideToggle();
    });
    $('.up').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });


    /*動態*/
    $(".heartBeat").click(function(e) {
        $(this).addClass("animate__animated animate__heartBeat");
    });
    $(".hover-jq").hover(function(e) {
        $(this).addClass("animate__animated animate__heartBeat");
    });

});