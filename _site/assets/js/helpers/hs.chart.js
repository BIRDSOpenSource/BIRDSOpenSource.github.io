/**
 * Charts helper-wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires chart.js (v1.0.3)
 *
 */
;(function($){
	'use strict';

	$.HSCore.helpers.HSChart = {


		/**
		 * ChartJS
		 */
		ChartJS: {

			/**
			 *
			 * @var Object _baseConfig
			 */
			_baseConfig : {
				defaultFontColor: '#555',
				defaultFontFamily: "'Open Sans', 'Helvetica', 'Arial', 'sans-serif'",
				defaultFontSize: 14,
				defaultFontStyle: 'normal',
				legend: {
					labels: {
						usePointStyle: true
					}
				},
				elements: {
					point: {
						radius: 5,
						hoverRadius: 7
					}
				}
			},

			/**
			 * Sets default configuration of charts.
			 *
			 * @param Object config (optional)
			 *
			 * @return undefined
			 */
			setDefaults: function(config){

				if(config && $.isPlainObject(config)) {

					$.extend(true, Chart.defaults.global, this._baseConfig, config);
					return;

				}

				$.extend(true, Chart.defaults.global, this._baseConfig);

			}

		}

	};

})(jQuery);