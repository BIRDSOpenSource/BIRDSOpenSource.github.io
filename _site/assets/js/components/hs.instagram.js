/**
 * Instagram wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSInstagram = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      get: 'user',
      limit: '12',
      template: '<div class="col-md-2 g-mb-30"><a href="{{link}}" target="_blank"><img class="img-fluid" src="{{image}}" /></a></div>'
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Instagram wrapper.
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

      this.instaInit();

      return this.pageCollection;

    },

    instaInit: function () {
      //Variables
      var $self, config, collection;
      //Variables values
      $self = this;
      config = $self.config;
      collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this, instaFeed, ID, userID, clientID, token;
        //Variables values
        $this = $(el);
        ID = $this.attr('id');
        userID = $this.data('user-id');
        clientID = $this.data('client-id');
        token = $this.data('token');

        instaFeed = new Instafeed({
          get: config['get'],
          limit: config['limit'],
          template: config['template'],
          userId: userID,
          clientId: clientID,
          accessToken: token,
          target: ID
        });

        instaFeed.run();

        //Actions
        collection = collection.add($this);
      });
    }

  }

})(jQuery);
