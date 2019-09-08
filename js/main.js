(function($) {
	"use strict";

	$(window).on('load', function() {
	    $(".preloader").fadeOut("slow", function() {
	        $(".preloader-left").addClass("slide-left");
	    });

	    $('#lionhero').owlCarousel({
	        animateOut: 'fadeOut',
	        nav: true,
	        navText: [
	            '<i class="ion-ios-arrow-thin-left"></i>',
	            '<i class="ion-ios-arrow-thin-right"></i>'
	        ],
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    $('#liontextslider').owlCarousel({
	        nav: false,
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    $('#liontestimonial').owlCarousel({
	        nav: true,
	        navText: [
	            '<i class="ion-ios-arrow-thin-left"></i>',
	            '<i class="ion-ios-arrow-thin-right"></i>'
	        ],
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });
	});

	$('.portfolio-block, .menu-item').on('click', function() {


	    var $container = $('#portfolio-container');
	    $container.isotope({
	        masonry: {
	            columnWidth: '.portfolio-item'
	        },
	        itemSelector: '.portfolio-item'
	    });
	    $('#filters').on('click', 'li', function() {
	        $('#filters li').removeClass('active');
	        $(this).addClass('active');
	        var filterValue = $(this).attr('data-filter');
	        $container.isotope({ filter: filterValue });
	    });

	});

	$('#element').typed({
	    strings: ["Hello👋","🔰Abhishek","Malviyan🤘🎓","Developer💻⌨️","Designer🎨","Engineer📚🔩","Hacker☣️💉","Basketball Player🏀","Photographer📹📷","Editor🎬","Gamer🕹🎮","blogger✍","Swimmer🎽🏊‍","Chef🍽️🍜","Singer🎤","Rider🏍️🏁","Problem solver🎲♟","Quick Learner🚀","Well Manager📈📅","Creative🌈🌟","Music Lover🎧","coffee☕ is 🖤","Foodie🍦🍽","Cricket fan🏏","Pure Veg🥒🥦","Single💖","9Sep🎂🎃","🕛12'o clock🛌💤","Josephite🎌","Jeevanite🏫","Gorakhpur🏡","🔰DAY⚔️🛡️⚔️ SCHOLAR🔰","Spreading smiles🤗","hello.coderaky.com🔗","© coderaky","Searching...🛸"],
	    typeSpeed: -50,
	    loop: true,
	    startDelay: 500,
	    backDelay: 3000,
	    contentType: 'html',
	});

	var myPlayer;
    $(function () {
      myPlayer = $("#bgndVideo").YTPlayer({useOnMobile:true, mobileFallbackImage:"assets/mask-4.png"});

    });

	$(document).on('click', '.open-project', function() {
	    var projectUrl = $(this).attr("href");
	    $('.inline-menu-container').removeClass('showx');
	    $('.sidebar-menu').addClass('hidex');
	    $('.content-blocks.pop').addClass('showx');
	    $('.content-blocks.pop section').load(projectUrl+' .load-data > *');
	    return false;
	});

	$('.open-post').on('click', function() {
	    var postUrl = $(this).attr("href");
	    $('.inline-menu-container').removeClass('showx');
	    $('.sidebar-menu').addClass('hidex');
	    $('.content-blocks.pop').addClass('showx');
	    $('.content-blocks.pop section').load(postUrl);
	    return false;
	});

	$('.menu-block, .menu-item').on('click', function() {
	    $('.name-block').addClass('reverse');
	    $('.name-block-container').addClass('reverse');
	    $('.menu-blocks').addClass('hidex');
	    $('.inline-menu-container').addClass('showx');
	    $('.inline-menu-container.style2').addClass('dark');
	});

	$('.about-block, .menu-item.about').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.about').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.about').addClass('active');
	});

	$('.portfolio-block, .menu-item.portfolio').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.portfolio').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.portfolio').addClass('active');
	});

	$('.blog-block, .menu-item.blog').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.blog').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.blog').addClass('active');
	});

	$('.contact-block, .menu-item.contact').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.contact').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.contact').addClass('active');
	});

	$('#close').on('click', function() {
	    $('.name-block').removeClass('reverse');
	    $('.name-block-container').removeClass('reverse');
	    $('.content-blocks').removeClass('showx');
	    $('.menu-blocks').removeClass('hidex');
	    $('.inline-menu-container').removeClass('showx');
	    $('.menu-item').removeClass('active');
	});

	$('#close-pop').on('click', function() {
	    $('.content-blocks.pop').removeClass('showx');
	    $('.sidebar-menu').removeClass('hidex');
	    $('.inline-menu-container').addClass('showx');
	    $('.content-blocks.pop section').empty();
	});

	$('.menu-block, .menu-item, #close').on('click', function() {
	    $('.content-blocks').animate({ scrollTop: 0 }, 800);
	});

	$('#home').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.menu-item').removeClass('active');
	    $(this).addClass('active');
	    $('.inline-menu-container.style2').removeClass('dark');
	});

	google.maps.event.addDomListener(window, 'load', init);

	function init() {
	    var mapOptions = {

	        zoom: 11,

	        center: new google.maps.LatLng(26.706335, 83.446500),

	        scrollwheel: false,

	        styles: [{
	            featureType: 'all',
	            stylers: [{
	                saturation: -65
	            }]
	        }, {
	            featureType: 'road.arterial',
	            elementType: 'geometry',
	            stylers: [{
	                hue: '#00ffee'
	            }, {
	                saturation: 80
	            }]
	        }, {
	            featureType: 'poi.business',
	            elementType: 'labels',
	            stylers: [{
	                visibility: 'off'
	            }]
	        }]
	    };

	    var mapElement = document.getElementById('map');

	    var map = new google.maps.Map(mapElement, mapOptions);

	    var image = 'images/map-marker.png';

	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(26.706335, 83.446500),
	        map: map,
	        icon: image,
	        draggable: true,
	        animation: google.maps.Animation.DROP
	    });
	    marker.addListener('click', toggleBounce);

	    function toggleBounce() {
	        if (marker.getAnimation() !== null) {
	            marker.setAnimation(null);
	        } else {
	            marker.setAnimation(google.maps.Animation.BOUNCE);
	        }
	    }
	}
})(jQuery);
