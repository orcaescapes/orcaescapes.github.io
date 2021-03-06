function PageAnim() {
    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 400,
        linkElement: ".animation-link",
        loading: !0,
        loadingParentElement: "html",
        loadingClass: "animsition-loading",
        unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"],
        overlay: !1,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body"
    })
}

function ImagesLoad() {
    $("body").waitForImages({
        finished: function () {
            all_images_loaded = 1, console.log("Images Load: All loaded"), setTimeout(function () {
                $(".slides li, .hero-image, .item-content, .post-image").addClass("image-show")
            }, 1e3), setTimeout(function () {
                $("#main img").addClass("image-show")
            }, 500)
        }, each: function () {
            console.log("Images Load: Each loaded"), setTimeout(function () {
                $(this).addClass("image-show")
            }, 1e3)
        }, waitForAll: !0
    }), load_once = 1, console.log("LOAD: First load")
}

function ResponsiveMenu() {
    $(".flexnav").flexNav({
        animationSpeed: 500,
        transitionOpacity: !1,
        buttonSelector: "#nav-menu",
        hoverIntent: !1,
        hoverIntentTimeout: 150,
        calcItemWidths: !1,
        hover: !0
    })
}

function HideShowMenu() {
    function e() {
        var e = $(this).scrollTop();
        Math.abs(n - e) <= t || (e > n && e > i ? $(".scroll-hide").length > 0 && $("header").removeClass("nav-down").addClass("nav-up") : $(".scroll-hide").length > 0 && e + $(window).height() < $(document).height() && $("header").removeClass("nav-up").addClass("nav-down"), n = e)
    }

    var o, n = 0, t = 5, i = ($("header").outerHeight(), 20);
    return $(window).scroll(function (e) {
        o = !0
    }), $(".scroll-hide").length > 0 && setInterval(function () {
        o && (e(), o = !1)
    }, 100), !1
}

function HeroHeight() {
    if ($("#hero").length > 0) if ($("#hero").hasClass("hero-small")) {
        var e = window.innerHeight;
        document.getElementById("hero").style.height = .5 * e + "px"
    } else if ($("#hero").hasClass("hero-big")) {
        var e = window.innerHeight;
        document.getElementById("hero").style.height = .85 * e + "px"
    } else {
        var e = window.innerHeight;
        document.getElementById("hero").style.height = e + "px"
    }
}

function HeroParallax() {
    var e = $("body"), o = e.find("#hero-styles");
    if (o.length > 0) {
        o.offset().top
    }
    $(window).scroll(function () {
        var e = $(document).scrollTop(), n = $("#hero-styles").height();
        $("#hero-styles").hasClass("prl") && o.css("top", .5 * e), $("#hero-styles").hasClass("stc") && o.css("top", 1 * e), $("#hero-styles").hasClass("opc") && o.css("opacity", 1 - e / n * 1.2)
    })
}

function ScrollTo() {
    $(".scroll").click(function (e) {
        e.preventDefault();
        var o = 0;
        o = $(this.hash).offset().top > $(document).height() - $(window).height() ? $(document).height() - $(window).height() : $(this.hash).offset().top, $("html,body").animate({scrollTop: o + 1}, 600, "swing")
    })
}

function Sintaxcode() {
    SyntaxHighlighter.all(), $("a[rel^='prettyPhoto']").prettyPhoto();
    var e = $(window).scrollTop();
    e >= 50 ? $("header").addClass("dark") : $("header").removeClass("dark")
}

function BackToTop() {
    $(window).scroll(function () {
        $(window).scrollTop() + $(window).height() == $(document).height() ? $(".scrolltotop").removeClass("hidden") : $(".scrolltotop").addClass("hidden")
    }), $(".scrolltotop").click(function () {
        return $("html, body").animate({scrollTop: 0}, 800), !1
    }), $(".down-hero").click(function () {
        return $("html, body").animate({scrollTop: $("#hero").offset().top - 120}, 500), !1
    })
}

function AppearIteam() {
    $(".has-animation").each(function () {
        $(this).appear(function () {
            $(this).addClass("animate-in")
        })
    })
}

$(document).ready(function () {
    "use strict";
    $("body").waitForImages({
        finished: function () {
            setTimeout(function () {
                $("header").removeClass("hidden")
            }, 500), setTimeout(function () {
                $("#hero").removeClass("hidden")
            }, 1e3)
        }, waitForAll: !0
    }), PageAnim(), ImagesLoad(), HideShowMenu(), HeroHeight(), HeroParallax(), ScrollTo(), Sintaxcode(), ResponsiveMenu(), BackToTop(), AppearIteam()
}), $(window).on("resize", function () {
    HeroHeight()
}), $(window).scroll(function () {
    var e = $(window).scrollTop();
    e >= 50 ? $("header").addClass("dark") : $("header").removeClass("dark")
});



// external js: isotope.pkgd.js
// fonctions liant boutons et fonctions de tri'

$(function () {

    var filterSelector = '*';

// init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        sortBy: 'selector',
        getSortData: {
            selector: function (itemElem) {
                return !$(itemElem).is(filterSelector);
            },
        },
    });

    var $items = $grid.find('.element-item');

// bind button click
    $('.filters-button-group').on('click', 'button', function () {
        filterSelector = $(this).attr('data-filter');
        $grid.isotope('updateSortData').isotope();
        // change is-filtered-out class
        $items.filter(filterSelector).removeClass('is-filtered-out');
        $items.not(filterSelector).addClass('is-filtered-out');
    });

    $('.download-song-button').click(function() {
        alert("Truc sur la licence d'utilisation. Allez-y saut si vous êtes JJAbrams et que vous voulez torcher la bande son de vos bockblusters à pas cher");
    });




// change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });


    var coll = document.getElementsByClassName("collapsible_songs");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
            $grid.isotope();

        });
    }

});


// about clearer

(function($) {

    $(".about_clearerContent").hide();


    $( "#about_clearerToggle" ).click(

    function() {
        $( ".about_clearerContent" ).slideToggle( "slow", function() {
        });

        if($( "#about_clearerTip" ).text() == "Vous vouliez vraiment savoir ce qu'est Orcæ ? clickez"){
            $( "#about_clearerTip" ).text( "Merci, mais là c'est beaucoup trop long..." );
        } else {
            if($( "#about_clearerTip" ).text() == "Vous vouliez revoir la version longue ?") {
                $("#about_clearerTip").text("Cette fois ci c'est bon");
            } else {
                $( "#about_clearerTip" ).text( "Vous vouliez revoir la version longue ?" );
            }

        }

    });

})(jQuery);



