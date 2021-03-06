(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	$('.primary-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-area',
		meanScreenWidth: "991",
		meanRevealPosition: "right",
	});

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});

	// Main Slider
	if (jQuery(".slider").length > 0) {

		let carousel_slider = $(".slider");
		carousel_slider.owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dotsData:true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause:true,
		});
	
		carousel_slider.on('translate.owl.carousel', function () {
			let slideLayer = $("[data-animation]");
			slideLayer.each(function () {
				let anim_name = $(this).data('animation');
				$(this).removeClass('animated ' + anim_name).css('opacity', '0');
			});
		});
	
		carousel_slider.on('translated.owl.carousel', function () {
			let slideLayer = carousel_slider.find('.owl-item.active').find("[data-animation]");
			slideLayer.each(function () {
				let anim_name = $(this).data('animation');
				$(this).addClass('animated ' + anim_name).css('opacity', '1');
			});
		});
	
		$("[data-delay]").each(function () {
			let anim_del = $(this).data('delay');
			$(this).css('animation-delay', anim_del);
		});
	
		$("[data-duration]").each(function () {
			let anim_dur = $(this).data('duration');
			$(this).css('animation-duration', anim_dur);
		});
	};

	// Protfolio Slider
		$('.protfolio-active').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay: true,
			autoplayTimeout: 10000,
			autoplayHoverPause:true,
			navText: ['<i class="fal fa-long-arrow-left"></i>','<i class="fal fa-long-arrow-right"></i>'],
			center:true,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:2
				},
				1140:{
					items:3
				}
			}
		})


	// Brand Slider
		$('.brand-active').owlCarousel({
			loop:true,
			margin:10,
			autoplay: true,
			autoplayTimeout: 7000,
			autoplayHoverPause:true,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1140:{
					items:5
				}
			}
		})


	// Feedback Slider
		$('.feedback-slider').owlCarousel({
			loop:true,
			margin:20,
			autoplay: true,
			autoplayTimeout: 7000,
			autoplayHoverPause:true,
			nav:true,
			navText: ['<i class="fal fa-long-arrow-left"></i>','<i class="fal fa-long-arrow-right"></i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},
				768:{
					items:2,
				},
				992: {
					items:3,
				},
			}
		})

	// Popup Gallery 
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});

	/*------------------------------------
        Overlay Close
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});


})(jQuery);
