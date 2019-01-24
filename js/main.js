jQuery(function ($) {

  // accordian
  $('.accordion-toggle').on('click', function () {
    $(this).closest('.panel-group').children().each(function () {
      $(this).find('>.panel-heading').removeClass('active');
    });

    $(this).closest('.panel-heading').toggleClass('active');
  });

  //Initiat WOW JS
  new WOW().init();

  // portfolio filter
  $(window).load(function () {
    'use strict';
    var $portfolio_selectors = $('.portfolio-filter >li>a');
    var $portfolio = $('.portfolio-items');
    $portfolio.isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $portfolio_selectors.on('click', function () {
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $portfolio.isotope({
        filter: selector
      });
      return false;
    });
  });

  // Contact form
  var form = $('#main-contact-form');
  form.submit(function (event) {
    event.preventDefault();
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: $(this).attr('action'),

      beforeSend: function () {
        form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
      }
    }).done(function (data) {
      form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
    });
  });

  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

   // Smoth scroll on page hash links
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        /* if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false; */
      }
    }
  });

  // Gallery - uses the magnific popup jQuery plugin
  /* $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  }); */

  // custom code

});
