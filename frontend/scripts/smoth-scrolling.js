$(document).ready(function() {
    console.log("Hello JQUERY")
    $('.down').click(function() {
        $('html, body').animate({
            scrollTop: $('#section').offset().top
        }, 800); // 800 milliseconds for the animation duration
    });
});
