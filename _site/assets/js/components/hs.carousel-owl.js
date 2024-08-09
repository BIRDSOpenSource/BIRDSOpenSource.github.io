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

  $.HSCore.components.HSCarouselOwl = {
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
     * Initialization of Owl Carousel wrapper.
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

      this.initOwlCarousel();

      return this.pageCollection;

    },

    initOwlCarousel: function () {
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
            setAnimateIn = $this.data('animate-in'),
            setAnimateOut = $this.data('animate-out');

        $this.owlCarousel({
          loop: true,
          items: 1,
          autoplay: setAutoplay ? true : config['autoplay'],
          animateIn: setAnimateIn ? setAnimateIn : false,
          animateOut: setAnimateOut ? setAnimateOut : false,
          onTranslate: function(event) {
            $(event.target.children[0].children).addClass('js-origin');
          },
          onTranslated: function(event) {
            $(event.target.children[0].children).removeClass('js-origin');
          }
        });

        //Actions
        collection = collection.add($this);
      });
    }

  }

})(jQuery);
