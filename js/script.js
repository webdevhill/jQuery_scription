// Smooth Scroll

(function(){
    'use strict';

     $('nav li ul a').click(function(evt){
        evt.preventDefault();

        const thisSection = $(this).attr('href');
       
         $('html, body').stop().animate({
            scrollTop: $(thisSection).offset().top - 200
        }, 600, 'easeOutCirc')

    });

    $('.logo').click(function() {
        $('html, body').stop().animate({
            scrollTop: $('body').offset().top
        }, 600, 'easeInCirc')
        
    });

})();

// FlexSlider

(function(){
    'use strict';

    $(window).on("load", function() {
    $(".flexslider").flexslider({
        animation: "slide",
        slideshowSpeed: 3e3,
        pauseOnHover: !0,
        directionNav: !1,
        before: function() {
            $(".cta").css("bottom", "-223px")
        },
        start: function() {
            $(".cta").animate({
                bottom: "0"
            }, 600, "easeInCirc")
        },
        after: function() {
            $(".cta").animate({
                bottom: "0"
            }, 600, "easeInCirc")
        }
    })
});

})();

// Tabs

(function(){
    'use strict';

    $('#tabs ul li a').click(function(evt){
        $('#tabs ul li a').css({background: '#C8D6AF', color: '#061923'});
        $(this).css({background: '#F7FFEA', color: '#061923'});
        const thisTab = $(this).attr('href');
        $('#tabs > div:visible').fadeOut(250, function(){
            $(thisTab).fadeIn(250);
        })
    });

})();


// Content Rotator

(function(){
    'use strict';
    let counter = 1;

    function contentRotator(){
        $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2e3, function(){
            if($(this).is('#rotator blockquote:last-child')){
                setTimeout(function(){
                    $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
                        counter = 1;
                        contentRotator();
                    })
                }, 7000);
            }else{
                setTimeout(function(){
                    $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
                        counter ++;
                        contentRotator();
                    })
                }, 7000);
            }
        });
    }

    contentRotator();

})();


// Features Rotator 
(function(){
    'use strict';

    const features = function() {
        let counter = 1,
        defaultPosition = 0;
        
        const allFeatures = $("#features ul:first-of-type li").length;
        let currentFeature = $("#features ul:first-of-type").clone();
        $("#features ul:first-of-type li:nth-child(1)").css({
                color: "#FF5964",
                fontWeight: "600"
            }), $("#features").append(currentFeature),
            function scrollFeatures() {
                setTimeout(function() {
                    counter <= allFeatures ? (defaultPosition -= 30, $("#features").animate({
                        top: defaultPosition + "px"
                    }, 500, function() {
                        $("#features ul:first-of-type li:nth-child(" + (counter + 1) + ")").css({
                            color: "#FF5964",
                            fontWeight: "600"
                        }), counter++, scrollFeatures()
                    })) : ($("#features ul:first-of-type").remove(), currentFeature = $("#features ul:first-of-type").clone(), $("#features").css("top", "0"), $("#features").append(currentFeature), defaultPosition = 0, counter = 1, $("#features ul:first-of-type li:nth-child(1)").css({
                        color: "#FF5964",
                        fontWeight: "600"
                    }), scrollFeatures())
                }, 1500)
            }()
    }();

})();

