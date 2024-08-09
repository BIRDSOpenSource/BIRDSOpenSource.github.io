/**
 * Step form wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSStepForm = {
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
     * Initialization of Step form wrapper.
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

      this.initStepForm();

      return this.pageCollection;

    },

    initStepForm: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el);

        var setProgress = function (currstep) {
            var percent;

            percent = parseFloat(100 / widget.length) * currstep;
            percent = percent.toFixed();
            $this.val(percent);
          },
          current = 1,
          widget = $('.js-step'),
          btnNext = $('.js-step-next');

        // Init buttons and UI
        widget.not(':eq(0)').hide();
        setProgress(current);

        // Next button click action
        btnNext.click(function (e) {
          e.preventDefault();

          if (current < widget.length) {
            widget.show();
            widget.not(':eq(' + (current++) + ')').hide();
            setProgress(current);
          }
        });

        //Actions
        collection = collection.add($this);
      });
    }

  };

})(jQuery);
