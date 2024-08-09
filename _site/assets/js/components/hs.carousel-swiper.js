/**
 * Carousel wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  //Back Slide Effect
  Swiper.prototype.plugins.backSlide = function (swiper) {
    if (swiper.params.effect !== 'backSlide') return;

    return {
      onSetTranslate: function () {
        var slidesWrapper = swiper.wrapper;

        $(slidesWrapper).addClass('js-origin');
      },
      onSetTransition: function () {
        var slideActive = swiper.slides[swiper.activeIndex],
            nextIndex = function () {
              if (swiper.activeIndex - 1 != -1) {
                return swiper.activeIndex - 1;
              } else {
                return 0;
              }
            },
            slideNext = swiper.slides[nextIndex()];

        console.log(swiper.slides[swiper.activeIndex - 1]);

        $(slideActive).addClass('js-back-slide-in');
        $(slideNext).addClass('js-back-slide-out');
      },
      onTransitionEnd: function () {
        var slidesWrapper = swiper.wrapper;

        setTimeout(function() {
          $(slidesWrapper).removeClass('js-origin');

          for (var i = 0; i < swiper.slides.length; i++) {
            var allSlides = swiper.slides[i];

            $(allSlides).removeClass('js-back-slide-in js-back-slide-out');
          }
        }, 800);
      }
    };
  };

  $.HSCore.components.HSCarouselSwiper = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Carousel Swiper wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
          $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initCarouselSwiper();

      return this.pageCollection;
    },

    initCarouselSwiper: function () {
      //Variables
      var $self, config, collection;
      //Variables values
      $self = this;
      config = $self.config;
      collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
            setAutoplay = $this.data('autoplay'),
            setEffect = $this.data('effect');

        i = new Swiper(el, {
          slidesPerView: 1,
          loop: true,
          autoplay: setAutoplay ? 2000 : false,

          effect: setEffect ? setEffect : 'slide'
        });

        //Actions
        collection = collection.add($this);
      });
    }

  }

})(jQuery);
