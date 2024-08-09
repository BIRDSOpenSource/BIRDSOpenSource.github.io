/**
 * Flickr wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSFlickr = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      autoplay: true,
      infinite: true
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Flickr wrapper.
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

      this.flickrInit();

      return this.pageCollection;

    },

    flickrInit: function () {
      //Variables
      var $self, config, collection;
      //Variables values
      $self = this;
      config = $self.config;
      collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this;
        //Variables values
        $this = $(el);

        //Type of content
        if ($this.data('photoset-id')) {
          $self.photosetInit($this);
        } else if ($this.data('gallery-id')) {
          $self.galleryInit($this);
        } else {
          return;
        }

        //Actions
        collection = collection.add($this);
      });
    },

    photosetInit: function (el) {
      //Variables
      var $self, apiKey, userID, photosetID;
      //Variables values
      $self = this;
      apiKey = el.data('key');
      userID = el.data('user-id');
      photosetID = el.data('photoset-id');

      $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' +
          apiKey +
          '&photoset_id=' +
          photosetID +
          '&user_id=' +
          userID +
          '&format=json&nojsoncallback=1', function (data) {
        //Variables
        var elLength, i;
        //Variables values
        elLength = data.photoset.photo.length;

        for (i = 0; i < elLength; i++) {
          var item, photoURL, itemMarkup;
          item = data.photoset.photo[i];
          photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_b.jpg';
          itemMarkup = '<div class="col-md-2"><div class="js-block-square g-bg-size-cover g-brd-around g-brd-gray-light-v1 g-mb-20" style="background-image: url(' +
              photoURL +
              ');"></div><h4 class="text-uppercase g-font-size-14">' +
              item.title +
              '</h4></div>';
          el.append(itemMarkup);
        }
      }).done(function () {
        $self.squareBlocks('.js-block-square');

        $(window).on('resize', function () {
          $self.squareBlocks('.js-block-square');
        });
      });
    },

    galleryInit: function (el) {
      //Variables
      var $self, apiKey, galleryID;
      //Variables values
      $self = this;
      apiKey = el.data('key');
      galleryID = el.data('gallery-id');

      $.getJSON('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=' +
          apiKey +
          '&gallery_id=' +
          galleryID +
          '&format=json&nojsoncallback=1', function (data) {
        //Variables
        var elLength, i;
        //Variables values
        elLength = data.photos.total;

        for (i = 0; i < elLength; i++) {
          var item, photoURL, itemMarkup, photoURLFull;
          item = data.photos.photo[i];
          photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_b.jpg';
          photoURLFull = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_b.jpg';
          itemMarkup = '<div class="col-md-2"><a class="js-fancy-link js-block-square d-block g-bg-pos-center g-bg-size-cover g-brd-around g-brd-gray g-mb-20" href="' +
              photoURLFull +
              '" style="background-image: url(' +
              photoURL +
              ');" rel="flickr-popup" title="' +
              item.title +
              '"></a><h4 class="text-uppercase g-font-size-14">' +
              item.title +
              '</h4></div>';
          el.append(itemMarkup);
        }
      }).done(function () {
        $self.squareBlocks('.js-block-square');

        $(window).on('resize', function () {
          $self.squareBlocks('.js-block-square');
        });
      });
    },

    squareBlocks: function (selector) {
      $(selector).each(function () {
        var $item, itemWidth;
        $item = $(this);
        itemWidth = $item.width();

        $item.css('height', itemWidth);
      });
    }

  }

})(jQuery);
