$(document).ready(function () {
    // Show and hide button after scroll down and up
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $('#back-top').fadeIn('slow');
        } else {
            $('#back-top').fadeOut('slow');
        }
    });
    // Clickable button js
    $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});
