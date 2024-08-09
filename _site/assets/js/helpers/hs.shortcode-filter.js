/**
 * Filter
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';
  $(document).ready(function() {
    function sortUnorderedList() {
      var mylist = $('.js-shortcode-filter-result');
      var listitems = mylist.children('li').get();
      listitems.sort(function(a, b) {
         return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
      })
      $.each(listitems, function(idx, itm) { mylist.append(itm); });
    }
    sortUnorderedList();

    $('.js-shortcode-filter a').on('click', function (e) {
      e.preventDefault();

      var filterKey = $(this).data("shortcode-filter");

      $('.js-shortcode-filter li').removeClass('active');
      $(this).parent().addClass('active');

      if(filterKey == 'all') {
        $('.js-shortcode-filter-result').children('.js-shortcode-filter__item').show();
      }
      else {
        $('.js-shortcode-filter-result').children(':not(.' + filterKey + ')').hide();
        $('.js-shortcode-filter-result').children('.' + filterKey).show();
      }
      return false;
    });
  });
})(jQuery);