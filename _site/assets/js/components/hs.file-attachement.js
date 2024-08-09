/**
 * File attachment wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSFileAttachment = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      input: '<div class="u-file-attach-v3 g-mb-15">\
               <h3 class="g-font-size-16 g-color-gray-dark-v2 mb-0">Drop files here or <span class="g-color-primary">Browse your device</span></h3>\
               <p class="g-font-size-14 g-color-gray-light-v2 mb-0">Maximum file size 10mb</p>\
              </div>',
      box: '<div class="js-result-list row"></div>',
      item: '<div class="js-result-list__item col-md-3 text-center">\
              <div class="g-pa-10 g-brd-around g-brd-gray-light-v2">\
                <h3 class="g-font-size-16 g-color-gray-dark-v2 g-mb-5">{{fi-name}}</h3>\
                <p class="g-font-size-12 g-color-gray-light-v2 g-mb-5">{{fi-size2}}</p>\
                <div class="g-mb-10">{{fi-image}}</div>\
                <div class="text-left">{{fi-progressBar}}</div>\
              </div>\
             </div>',
      itemAppend: '<div class="js-result-list__item col-md-3">\
                    <div class="g-pa-10 g-brd-around g-brd-gray-light-v2">\
                      <h3 class="g-font-size-16 g-color-gray-dark-v2 g-mb-5">{{fi-name}}</h3>\
                      <p class="g-font-size-12 g-color-gray-light-v2 g-mb-5">{{fi-size2}}</p>\
                      <div class="g-mb-10">{{fi-image}}</div>\
                      <div class="text-left">{{fi-progressBar}}</div>\
                      <div>{{fi-icon}}</div>\
                      <div><i class="js-result-list-item-remove fa fa-close"></i></div>\
                    </div>\
                   </div>',
      progressBar: '<progress class="u-progress-bar-v1"></progress>',
      selectors: {
        list: '.js-result-list',
        item: '.js-result-list__item',
        progressBar: '.u-progress-bar-v1',
        remove: '.js-result-list-item-remove'
      }
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of File attachment wrapper.
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

      this.initFileAttachment();

      return this.pageCollection;

    },

    initFileAttachment: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el);

        $this.filer({
          changeInput: config.input,
          showThumbs: true,
          templates: {
            box: config.box,
            item: config.item,
            itemAppend: config.itemAppend,
            progressBar: config.progressBar,
            _selectors: config.selectors,
            itemAppendToEnd: false,
            removeConfirmation: true
          },
          dragDrop: {},
          uploadFile: {
            url: '../../../assets/include/php/file-upload/upload.php',
            data: {},
            type: 'POST',
            enctype: 'multipart/form-data',
            beforeSend: function () {
            },
            success: function (data, el) {
              var parent = el.find(".u-progress-bar-v1").parent();
              el.find(".u-progress-bar-v1").fadeOut("slow", function () {
                $("<div class=\"text-success g-px-10\"><i class=\"fa fa-check-circle\"></i> Success</div>").hide().appendTo(parent).fadeIn("slow");
              });
            },
            error: function (el) {
              var parent = el.find(".u-progress-bar-v1").parent();
              el.find(".u-progress-bar-v1").fadeOut("slow", function () {
                $("<div class=\"text-error g-px-10\"><i class=\"fa fa-minus-circle\"></i> Error</div>").hide().appendTo(parent).fadeIn("slow");
              });
            }
          }
        });

        //Actions
        collection = collection.add($this);
      });
    }

  };

})(jQuery);
