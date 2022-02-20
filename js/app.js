// svg icons support ie11
AOS.init({
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });

(function() {
    svg4everybody();
})();

// carousel arrows
var navArrows = ['\n    <svg class="icon icon-arrow-prev">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>\n    </svg>', '<svg class="icon icon-arrow-next">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>\n    </svg>'];

// owl carousel
$(document).ready(function() {

    var sliderReview = $('.js-slider-review');
    sliderReview.owlCarousel({
        items: 3,
        nav: true,
        navElement: 'button',
        navText: navArrows,
        dots: false,
        loop: true,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 3
            }
        }
    });

    var sliderComment = $('.js-slider-comment');
    sliderComment.owlCarousel({
        items: 3,
        nav: true,
        navElement: 'button',
        navText: navArrows,
        dots: false,
        loop: true,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
});

// toggle body theme
(function() {
    var switchTheme = $('.js-switch-theme'),
        body = $('body');

    switchTheme.on('change', function() {
        if (!body.hasClass('dark')) {
            body.addClass('dark');
            localStorage.setItem('darkMode', "on");
        } else {
            body.removeClass('dark');
            localStorage.setItem('darkMode', "off");
        }
    });
})();

// header coloe change 
$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".header").removeClass("active");
        $(".header__link").removeClass("color");
        

       
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").addClass("active");
        $(".header__link").addClass("color");
        
    }
});

// faq
(function() {
    var item = $('.faq__item, .questions__item'),
        head = $('.faq__head, .questions__head'),
        body = $('.faq__body, .questions__body');
    head.on('click', function() {
        var thisHead = $(this);
        thisHead.parents('.faq__item, .questions__item').toggleClass('active');
        thisHead.parents('.faq__item, .questions__item').find('.faq__body, .questions__body').slideToggle();
    });
})();

// magnificPopup
(function() {
    var link = $('.js-popup-open');
    link.magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 200,
        callbacks: {
            beforeOpen: function beforeOpen() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });
})();

// header
(function() {
    var header = $('.header'),
        wrapper = header.find('.header__wrapper'),
        burger = header.find('.header__burger');

    burger.on('click', function() {
        burger.toggleClass('active');
        wrapper.toggleClass('visible');
        $('html').toggleClass('no-scroll');
        $('body').toggleClass('no-scroll');
    });
    wrapper.on('click', function() {
        if($('body').hasClass("no-scroll")){
            burger.toggleClass('active');
            wrapper.toggleClass('visible');
            $('html').toggleClass('no-scroll');
            $('body').toggleClass('no-scroll');
        }
    });

})();

// pricing options
(function() {
    var view = $('.pricing__view');

    view.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parents('.pricing__item').find('.pricing__options').slideToggle();
    });
})();

// aos animation
AOS.init();

// email validation in contact form
let email = document.getElementById("email");
let error = document.getElementById("error");

function validate(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }

}