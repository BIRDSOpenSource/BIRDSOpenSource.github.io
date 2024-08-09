/**
 * Twitter wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSTwitter = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      dateFormat: '%b. %d, %Y',
      template: '<div class="js-slide">' +
      '<blockquote class="g-font-size-18 g-mb-10--xs">' +
      '{{tweet}}' +
      '</blockquote>' +
      '<h4 class="g-font-size-18 g-mb-10--xs">' +
      '<a class="g-color-primary" href="https://twitter.com/{{screen_name}}">' +
      '@{{screen_name}}' +
      '</a>' +
      '</h4>' +
      '<ul class="list-inline g-font-size-18 g-mb-0--xs">' +
      '<li class="list-inline-item g-px-5--xs">' +
      '<a href="https://twitter.com/intent/tweet?in_reply_to={{tweet_id}}">' +
      '<i class="fa fa-reply"></i>' +
      '</a>' +
      '</li>' +
      '<li class="list-inline-item g-px-5--xs">' +
      '<a href="https://twitter.com/intent/retweet?tweet_id={{tweet_id}}">' +
      '<i class="fa fa-retweet"></i>' +
      '</a>' +
      '</li>' +
      '<li class="list-inline-item g-px-5--xs">' +
      '<a href="https://twitter.com/intent/like?tweet_id={{tweet_id}}">' +
      '<i class="fa fa-star"></i>' +
      '</a>' +
      '</li>' +
      '</ul>' +
      '</div>'
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Twitter wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config, callback) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
          $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.callback = callback;

      this.twitterInit();

      return this.pageCollection;

    },

    twitterInit: function () {
      //Variables
      var $self, config, collection, callback;
      //Variables values
      $self = this;
      config = $self.config;
      collection = $self.pageCollection;
      callback = $self.callback;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this;
        //Variables values
        $this = $(el);

        $this.twittie({
          dateFormat: config['dateFormat'],
          template: config['template']
        }, callback);

        //Actions
        collection = collection.add($this);
      });
    }

  }

})(jQuery);
