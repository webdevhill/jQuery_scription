$('nav ul li a').click(function(evt){
    evt.preventDefault();

    const thisSection = $(this).attr('href');

    $('html, body').stop().animate({
        scrollTop: $(thisSection).offsetTop -200
    }, 600, easeOutCirc);

    $('.logo').click(function(){
        $('html, body').stop().animate({
        scrollTop: $('body').offsetTop
    },  600, easeInCirc)
});
});

