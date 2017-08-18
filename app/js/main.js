$(document).ready(function(){

$('.slider').slick({
	dots: true,
	appendDots: $('.slide-control'),
	appendArrows: $('.slide-control'),
	dotsClass: "dots",
	prevArrow: '<div class="arr-prev"></div>',
	nextArrow: '<div class="arr-next"></div>'
});

$('.content-gallery__slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true
});


$('.js-front-search__block').mouseenter(function(){
	var _this = $(this);
	var data = $(this).data('active');
	var overlay = $('.overlay');

	if (overlay.is(":hidden")) {
		_this.addClass('active').siblings().removeClass('active');

		_this.parents('.front-search').find('.front-search__form-wrap[data-active="'+ data +'"]')
		// .css('display', 'block')
		.stop( true, true )
		// .fadeIn()
		.animate({
			right: "300px"
		})
		.siblings()
		// .css('display', 'none')
		.animate({
			right: "0px"
		});
	}

});

$('.front-search').mouseleave(function(){
	// $('.front-search__form-wrap').css('display', 'none');
	$('.front-search__form-wrap').animate({
			right: "0px"
		});;

	$('.js-front-search__block').removeClass('active');
})

$('.hamburger').click(function(){
    var leftNavigation = $('.navigation').position().left;
    var leftHeaderLaptop = $('.header-laptop').position().left;

    if ($(window).width() > 768) {
    	if(leftNavigation <= -600){
	        $('.navigation').animate({
	            left: '0'
	        }, 300);
	        $('.overlay').show();
	        $('body').css('overflow', 'hidden');
	    } else {
	        $('.navigation').animate({
	            left: '-1000px'
	        }, 300);
	        $('.overlay').hide();
	        $('.menu-hover').hide();
	        $('body').css('overflow', 'auto');
	    }
    }else{
    	if(leftHeaderLaptop <= -600){
	        $('.header-laptop').animate({
	            left: '0'
	        }, 300);
	        $('.overlay').show();
	        $('body').css('overflow', 'hidden');
	    } else {
	        $('.header-laptop').animate({
	            left: '-1000px'
	        }, 300);
	        $('.overlay').hide();
	        $('.menu-hover').hide();
	        $('body').css('overflow', 'auto');
	    }
    }
});



$('.navigation__arrow').click(function () {
	// var leftNavigation = $('.navigation').position().left;
    // var leftHeaderLaptop = $('.header-laptop').position().left;

    $('.navigation').animate({
        left: '-1000px'
    }, 300);

    $('.header-laptop').animate({
        left: '0'
    }, 300);

    $('.overlay').show();

    $('.burger-menu').removeClass("burger-menu--closed");
	$('.burger-menu').addClass("burger-menu--opened");
})

// if ($(window).width() > 1621) {
// 	$('.slide').css('height', $(window).outerHeight() - 95);
// 	$('.navigation').css('height', $(window).outerHeight() - 95);
// 	$('.menu-hover').css('height', $(window).outerHeight() - 95);
// }else if($(window).width() < 481){
// 	$('.slide').css('height', 'auto');
// 	$('.navigation').css('height', 'auto');
// 	$('.menu-hover').css('height', 'auto');
// }else{
// 	$('.slide').css('height', $(window).outerHeight() - 137);
// 	$('.navigation').css('height', $(window).outerHeight() - 137);
// 	$('.menu-hover').css('height', $(window).outerHeight() - 137);
// }

// $('.js-navigation__items').find('.navigation__item').mouseenter(function(){
// 	$('.menu-hover').hide();
// 	$(this).find('.menu-hover').show('fast');
// })

// $('.js-navigation__items, .menu-hover').mouseleave(function(){
// 	$('.menu-hover').hide();
// })

//первый вариант

$('.js-navigation__items').find('.navigation__item').mouseenter(function(){
	// $('.menu-hover').hide();
	$('.menu-hover').stop( true, true ).animate({
		left: '-100%'
	}, 900, 'easeInOutQuint');
	if ($(window).width() > 768) {
		// $('.menu-hover').show('fast');
		$('.menu-hover').stop( true, true ).animate({
			left: '100%'
		}, 900, 'easeInOutQuint');
	}
})

//второй вариант



// $('.js-navigation__items, .menu-hover__inner, .navigation__wrap, .navigation, .menu-hover').mouseleave(function(){
// 	// $('.menu-hover').hide();
// 	$('.menu-hover').stop( true, true ).animate({
// 		left: '-100%'
// 	}, 300);
// })

$('.menu-hover').mouseleave(function(){
	// $('.menu-hover').hide();
	$('.menu-hover').stop( true, true ).animate({
		left: '-100%'
	}, 300);
})

$('.menu-hover').mouseenter(function(){
	$('.menu-hover').css('left', '100%');
	// $('.menu-hover').stop( true, true ).animate({
	// 	left: '600px'
	// }, 300);
})


$("body").click(function(e) {
	var leftHeaderLaptop = $('.header-laptop').position().left;

    if ($(window).width() > 768) {
    	if($(e.target).closest(".navigation, .hamburger, .header-laptop").length==0) {
	    	$(".navigation").animate({
		       left: '-100%'
		    }, 300);
		    $('.burger-menu').removeClass("burger-menu--opened");
			$('.burger-menu').addClass("burger-menu--closed");
			$('.overlay').hide();
		    $('.menu-hover').stop( true, true ).animate({
				left: '-100%'
			}, 300);
		    $('body').css('overflow', 'auto');
	    }
    } else {
    	if($(e.target).closest(".navigation, .hamburger, .header-laptop").length==0) {
	    	$(".header-laptop").animate({
		       left: '-1000px'
		    }, 300);
		    $(".navigation").animate({
		       left: '-100%'
		    }, 300);
		    $('.burger-menu').removeClass("burger-menu--opened");
			$('.burger-menu').addClass("burger-menu--closed");
		    $('.menu-hover').stop( true, true ).animate({
				left: '-100%'
			}, 300);
		    $('body').css('overflow', 'auto');

		    if (leftHeaderLaptop > -600) {
		    	$('.overlay').hide();
		    }
	    }
    }
});


$('.nav__item--all, .nav__item--all a').click(function(event){
	event.preventDefault();
	var leftNavigation = $('.navigation').position().left;

	if(leftNavigation <= -600){
        $('.navigation').animate({
            left: '0'
        }, 300);
        
        $('body').css('overflow', 'hidden');

        $('.burger-menu').removeClass("burger-menu--closed");
		$('.burger-menu').addClass("burger-menu--opened");
    } else {
        $('.navigation').animate({
            left: '-1000px'
        }, 300);
        // $('.overlay').hide();
        $('.menu-hover').hide();
        $('body').css('overflow', 'auto');
    }

    // $('.overlay').show();
})


$('.entertainment-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1
});

$('.gallery__slider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<div class="g-prev"></div>',
	nextArrow: '<div class="g-next"></div>'
});


$(window).scroll(function(){
    var heightOfTop = $('.slider-wrap').height() + 152;

    if($(this).scrollTop() > heightOfTop && ($(this).width() > 767)){
        $('.header').addClass('header-fixed');
        $('.main').css('margin-top', '0px');

    } else if($(this).scrollTop() < heightOfTop){
        $('.header').removeClass('header-fixed');
        if ($(window).width() < 1480) {
        	$('.main').css('margin-top', '137px');
        }else{
        	$('.main').css('margin-top', '95px');
        }
    }
});

$('.hamburger').on('click', function() {
  $(this).find('.burger-menu').toggleClass("burger-menu--opened");
  $(this).find('.burger-menu').toggleClass("burger-menu--closed");
});

$('.top-content__slider').slick();

});