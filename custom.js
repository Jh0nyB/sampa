(function($) {
    "use strict";
    var SAMPA = {};
    var plugin_track = 'static/lib/';
    $.fn.exists = function() {
        return this.length > 0;
    };

	SAMPA.HeaderSticky = function() {
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $("header").addClass("fixed-header")
            $(".nav-link-btn").addClass("nav-link-btn-blue")
        });
    }

    SAMPA.MenuClose = function() {
        $('.navbar-nav .nav-link').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }

    SAMPA.HeaderHeight = function() {
        var HHeight = $('.header-height .fixed-header-bar').height()
        $('header').height(HHeight);
    }

    SAMPA.HeaderFixd = function() {
        var HscrollTop = $(window).scrollTop();
        if (HscrollTop >= 90) {
            $('header').addClass('fixed-header');
            $(".nav-link-btn").addClass("nav-link-btn-blue")
        } else {
            $('header').removeClass('fixed-header');
            $(".nav-link-btn").removeClass("nav-link-btn-blue")
        }
    }

    SAMPA.OnePage = function() {
        $('header a[href*="#"]:not([href="#"]), .got-to a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 70,
                    }, 1000);
                    return false;
                }
            }
        });
    }

    SAMPA.SearchBox = function() {
        var SearchToggle = $(".search_click")
        SearchToggle.on("click", function() {
            $('.search-box').toggleClass("searh-form-open");
        });
    }

    SAMPA.MegaMenu = function() {
        var mDropdown = $(".m-dropdown-toggle")
        mDropdown.on("click", function() {
            $(this).parent().toggleClass("open-menu-parent");
            $(this).next('ul').toggleClass("open-menu");
            $(this).toggleClass("open");
        });
    }

    SAMPA.ProgressBar = function() {
        $(".progress .progress-bar").each(function() {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
	}
	
    SAMPA.Accordion = function() {
        $('.accordion').each(function(i, elem) {
            var $elem = $(this),
                $acpanel = $elem.find(".acco-group > .acco-des"),
                $acsnav = $elem.find(".acco-group > .acco-heading");
            $acpanel.hide().first().slideDown("easeOutExpo");
            $acsnav.first().parent().addClass("acco-active");
            $acsnav.on('click', function() {
                if (!$(this).parent().hasClass("acco-active")) {
                    var $this = $(this).next(".acco-des");
                    $acsnav.parent().removeClass("acco-active");
                    $(this).parent().addClass("acco-active");
                    $acpanel.not($this).slideUp("easeInExpo");
                    $(this).next().slideDown("easeOutExpo");
                } else {
                    $(this).parent().removeClass("acco-active");
                    $(this).next().slideUp("easeInExpo");
                }
                return false;
            });
        });
    }

    SAMPA.Counter = function() {
        var counter = jQuery(".counter");
        var $counter = $('.counter');
        if (counter.length > 0) {
            loadScript(plugin_track + 'counter/jquery.countTo.js', function() {
                $counter.each(function() {
                    var $elem = $(this);
                    $elem.appear(function() {
                        $elem.find('.count').countTo({
                            speed: 2000,
                            refreshInterval: 10
                        });
                    });
                });
            });
        }
    }

    SAMPA.Owl = function() {
        var owlslider = jQuery("div.owl-carousel");
        if (owlslider.length > 0) {
            loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
                owlslider.each(function() {
                    var $this = $(this),
                        $items = ($this.data('items')) ? $this.data('items') : 1,
                        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                        $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                        $space = ($this.attr('data-space')) ? $this.data('space') : 30;

                    $(this).owlCarousel({
                        loop: $loop,
                        items: $items,
                        responsive: {
                            0: {
                                items: $this.data('xx-items') ? $this.data('xx-items') : 1
                            },
                            480: {
                                items: $this.data('xs-items') ? $this.data('xs-items') : 1
                            },
                            768: {
                                items: $this.data('sm-items') ? $this.data('sm-items') : 2
                            },
                            980: {
                                items: $this.data('md-items') ? $this.data('md-items') : 3
                            },
                            1200: {
                                items: $items
                            }
                        },
                        dots: $navdots,
                        autoplayTimeout: $autospeed,
                        smartSpeed: $smartspeed,
                        autoHeight: $autohgt,
                        margin: $space,
                        nav: $navarrow,
                        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
                        autoplay: $autoplay,
                        autoplayHoverPause: true
                    });
                });
            });
        }
    }

    SAMPA.Gallery = function() {
        if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
                if ($(".lightbox-gallery").exists()) {
                    $('.lightbox-gallery').magnificPopup({
                        delegate: '.gallery-link',
                        type: 'image',
                        tLoading: 'Loading image #%curr%...',
                        mainClass: 'mfp-fade',
                        fixedContentPos: true,
                        closeBtnInside: false,
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1]
                        }
                    });
                }
                if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                }
            });
        }
    }

    SAMPA.masonry = function() {
        var portfolioWork = $('.portfolio-content');
        if ($(".portfolio-content").exists()) {
            loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
                if ($(".portfolio-content").exists()) {
                    $(portfolioWork).isotope({
                        resizable: false,
                        itemSelector: '.portfolio-item',
                        layoutMode: 'masonry',
                        filter: '*'
                    });
                    var portfolioFilter = $('.filter li');
                    $(portfolioFilter).on('click', function() {
                        var filterValue = $(this).attr('data-filter');
                        portfolioWork.isotope({
                            filter: filterValue
                        });
                    });
                    $(portfolioFilter).on('click', function() {
                        $(this).addClass('active').siblings().removeClass('active');
                    });
                }
            });
        }
    }

    SAMPA.mTypeIt = function() {
        if ($(".type_it").exists()) {
            loadScript(plugin_track + 'typeit-master/typeit.min.js', function() {
                if ($(".type_it").exists()) {
                    new TypeIt('.type_it', {
                        speed: 200,
                        loop: true,
                        strings: [
                            'Designer',
                            'Developer'
                        ],
                        breakLines: false
                    });
                }
            });
        }
    }

    SAMPA.ContactForm = function() {
        $(".contactform").on("submit", function() {
            $(".output_message").text("Loading...");

            var form = $(this);
            $.ajax({
                url: form.attr("action"),
                method: form.attr("method"),
                data: form.serialize(),
                success: function(result) {
                    if (result == "success") {
                        $(".contactform").find(".output_message").addClass("success");
                        $(".output_message").text("Message Sent!");
                    } else {
                        $(".contactform").find(".output_message").addClass("error");
                        $(".output_message").text("Error Sending!");
                    }
                }
            });
            return false;
        });
    }

    var _arr = {};

    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            script.onload = callback;
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    };

    $(document).on("ready", function() {
        SAMPA.mTypeIt(),
            SAMPA.HeaderFixd(),
            SAMPA.masonry(),
            SAMPA.OnePage(),
            SAMPA.Counter(),
            SAMPA.HeaderHeight(),
            SAMPA.HeaderSticky(),
            SAMPA.MenuClose(),
            SAMPA.Gallery(),
            SAMPA.Accordion(),
            SAMPA.ProgressBar(),
            SAMPA.MegaMenu(),
            SAMPA.Owl(),
            SAMPA.ContactForm(),
            SAMPA.SearchBox();

    });

    $(window).on("scroll", function() {
        SAMPA.ProgressBar(),
            SAMPA.HeaderFixd();
    });

    const appHeight = () => {
        var vhHeight = $(".home-banner-04").height();
        $('.home-banner-04').css({
            height: window.innerHeight
        });
    }
    appHeight()
    window.addEventListener('resize', appHeight)


})(jQuery);