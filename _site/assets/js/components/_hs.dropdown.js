/**
 * Bootstrap Dorpdown Wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function($){
	'use strict';

	/**
	 * Helper function for detect support of touch events.
	 *
	 * @return Boolean
	 */
	function touchEvents(){
		if('ontouchstart' in window) {
			return true;
		}
		return false;
	}

	/**
	 * Helper function for moving viewport to specified element.
	 *
	 * @param jQuery element
	 *
	 * @return undefined
	 */
	function focusElement(element){
		if(!element || !element.length) return;

		var header = element.closest('.u-header').filter('[class*="u-header--side"]'),
				container = header.find('.u-header__sections-container'),
				offset = element.offset().top + container.scrollTop(),
				breakpoint = $(window).height() / 2;

		if(header.length && offset > breakpoint) {

			container.stop().animate({
				scrollTop: offset - breakpoint
			});

		}

	}

	/**
	 * Adds class if element doesn't fit into the screen.
	 *
	 * @param jQuery element
	 *
	 * @return undefined
	 */
	function smartPosition(element) {
		if(!element || !element.length) return;

		element.removeClass('u-dropdown--reverse-position').show();

		var breakpoint = $(window).width(),
				offset = element.offset().left + element.outerWidth();

		element.hide();

		if(offset > breakpoint) {
			element.addClass('u-dropdown--reverse-position');
		}

		// need RTL implementation
	}

	$.HSCore.components.HSDropdown = {


		/**
		 * Base configuration of the wrapper.
		 *
		 * @var Object _baseConfig
		 */
		_baseConfig: {
			event: 'click', // 'click', 'hover'
			appear: 'show-hide' // 'show-hide', 'slide', 'fade', 'slideRight'
		},

		/**
		 * Initialization of HSDropdown wrapper.
		 *
		 * @param String collection (optional)
		 *
		 * @return jQuery - collection of initialized items.
		 */
		init: function(collection) {
			if(!collection && !collection.length) return;

			var self = this;

			return collection.each(function(i, el){

				var $this = $(el),
						config = $.extend(true, {}, self._baseConfig, $this.data());

				if($this.data('HSDropdown')) return;

				$this.data(
					'HSDropdown',
					self._makeDropdownObject($this, config)
				);

			});
		},

		/**
		 * Returns Dropdown Object
		 *
		 * @param jQuery element
		 * @param Object config
		 *
		 * @return OnHoverDropdown|OnClickDropdown
		 */
		_makeDropdownObject: function(element, config) {

			switch(config['event']) {

				case 'hover' :
					return new OnHoverDropdown(
						element,
						config,
						this._makeDropdownEffect(element, config)
					);
				break;

				default:
					return new OnClickDropdown(
						element,
						config,
						this._makeDropdownEffect(element, config)
					);

			}

		},

		/**
		 * Returns dropdown effect object.
		 *
		 * @param jQuery element
		 * @param Object config
		 *
		 * @return SlideDownDropdownEffect|ShowHideDropdownEffect|FadeToggleDropdownEffect
		 */
		_makeDropdownEffect: function(element, config) {

			switch(config['appear']) {

				case 'slide':
					return new SlideDownDropdownEffect(element);
				break;

				case 'slideRight':
					return new SlideRightDropdownEffect(element);
				break;

				case 'fade':
					return new FadeToggleDropdownEffect(element);
				break;


				default:
					return new ShowHideDropdownEffect(element);

			}

		}

	};


	/**
	 * Constructor function for dropdown elements which will be appear by hover event.
	 *
	 * @param jQuery element
	 * @param Object config
	 * @param Object effect
	 */
	function OnHoverDropdown(element, config, effect) {
		this.element = element;
		this.config = config;
		this.effect = effect;

		if(touchEvents()) {
			this.initTabletBehavior();
		}
		else {
			this.init();
		}
	}

	/**
	 * Initialization of OnHoverDropdown object.
	 *
	 * @return OnHoverDropdown
	 */
	OnHoverDropdown.prototype.init = function() {
		var self = this;

		this.element
			.on('mouseenter.HSDropdown', function(e){
				if(self.mouseLeaveTimeOutId) clearTimeout(self.mouseLeaveTimeOutId);
				self.effect.show();
				e.preventDefault();
			})
			.on('mouseleave.HSDropdown', function(e){
				self.mouseLeaveTimeOutId = setTimeout(function(){
					self.effect.hide();
				}, 100);
				e.preventDefault();
			})
			.on('click.HSDropdown', function(e){
				e.stopPropagation();
			})
			.siblings('.dropdown-menu')
			.on('mouseenter.HSDropdown', function(e){
				if(self.mouseLeaveTimeOutId) clearTimeout(self.mouseLeaveTimeOutId);
				e.preventDefault();
			})
			.on('mouseleave.HSDropdown', function(e){
				self.mouseLeaveTimeOutId = setTimeout(function(){
					self.effect.hide();
				}, 100);
				e.preventDefault();
			});

		return this;
	}

	/**
	 * Initialization tablet behavior of OnHoverDropdown object.
	 *
	 * @return OnHoverDropdown
	 */
	OnHoverDropdown.prototype.initTabletBehavior = function(){

		var self = this;

		this.element.on('click.HSDropdown', function(e){
			if(!self.element.data('showed')) {
				self.element.data('showed', true);
				self.effect.show();
			}
			else {
				self.element.data('showed', false);
				self.effect.hide();
			}
			e.preventDefault();
			e.stopPropagation();
		});

		$(document).on('click.HSDropdown', function(e){
			if(!$(e.target).closest(self.element.parent()).length) {
				self.element.data('showed', false);
				self.effect.hide();
			}
		});

		return this;
	}

	/**
	 * Destroy OnHoverDropdown object.
	 *
	 * @return OnHoverDropdown
	 */
	OnHoverDropdown.prototype.destroy = function() {
		var self = this;

		this.element
			.off('.HSDropdown')
			.siblings('.dropdown-menu')
			.off('.HSDropdown');

		$(document).off('.HSDropdown');

		return this;
	}

	/**
	 * Constructor function for dropdown elements which will be appear by click event.
	 *
	 * @param jQuery element
	 * @param Object config
	 * @param Object effect
	 */
	function OnClickDropdown(element, config, effect) {

		this.element = element;
		this.config = config;
		this.effect = effect;

		this.init();

	}

	/**
	 *
	 *
	 * @param
	 *
	 * @return OnClickDropdown
	 */
	OnClickDropdown.prototype.init = function() {
		var self = this;

		this.element.on('click.HSDropdown', function(e){

			var opened = $('[data-toggle="dropdown"]').not(self.element)

			if(opened.length) {
				opened.data('HSDropdown').effect.hide();
				opened.data('HSDropdown').element.data('showed', false);
			}


			if(!self.element.data('showed')) {
				self.element.data('showed', true);
				self.effect.show();
			}
			else {
				self.element.data('showed', false);
				self.effect.hide();
			}
			e.preventDefault();
			e.stopPropagation();
		});

		$(document).on('click.HSDropdown', function(e){
			if(!$(e.target).closest(self.element.parent()).length) {
				self.element.data('showed', false);
				self.effect.hide();
			}
		});

		return this;
	}

	/**
	 *
	 *
	 * @param
	 *
	 * @return OnClickDropdown
	 */
	OnClickDropdown.prototype.destroy = function() {

		this.element
			.off('.HSDropdown');

		$(document).off('.HSDropdown');

		return this;
	}

	/**
	 * Constructor function for making dropdown effect object.
	 *
	 * @param jQuery element
	 */
	function ShowHideDropdownEffect(element) {
		this.element = element;
		this.dropdown = this.element.siblings('.dropdown-menu');
	}

	/**
	 * Shows dropdown element.
	 *
	 * @return ShowHideDropdownEffect
	 */
	ShowHideDropdownEffect.prototype.show = function() {
		var inlineNavbar = this.element.closest('[class*="u-navbar--inline-submenu"]');

		if(!this.dropdown.length) return this;

		this.element.parent().addClass('show');

		if(inlineNavbar.length) {
			inlineNavbar.removeClass('u-navbar--overflow');

			var ddOffset = this.dropdown.offset().left;

			if(ddOffset < 0) inlineNavbar.addClass('u-navbar--overflow');
		}

		focusElement(this.element);

		return this;
	}

	/**
	 * Hides dropdown element.
	 *
	 * @return ShowHideDropdownEffect
	 */
	ShowHideDropdownEffect.prototype.hide = function() {
		this.element.parent().removeClass('show');

		return this;
	}

	/**
	 * Constructor function for making dropdown effect object.
	 *
	 * @param jQuery element
	 */
	function FadeToggleDropdownEffect(element) {
		this.element = element;

		this.dropdown = this.element.siblings('.dropdown-menu');
	}

	/**
	 * Shows dropdown element.
	 *
	 * @return FadeToggleDropdownEffect
	 */
	FadeToggleDropdownEffect.prototype.show = function() {
		var self = this,
				inlineNavbar = this.element.closest('[class*="u-navbar--inline-submenu"]');

		if(!this.dropdown.length) return this;

		if(inlineNavbar.length) {
			inlineNavbar.removeClass('u-navbar--overflow');

			this.dropdown.show();
			var ddOffset = this.dropdown.offset().left;
			this.dropdown.hide();

			if(ddOffset < 0) inlineNavbar.addClass('u-navbar--overflow');
		}

		this.dropdown.stop().fadeIn({
			easing: self.element.data('appear-easing') ? self.element.data('appear-easing') : 'linear',
			duration: isFinite(self.element.data('appear-speed')) ? self.element.data('appear-speed') : 350,
			complete: function() {
				focusElement(self.element);
			}
		});

		return this;
	}

	/**
	 * Hides dropdown element.
	 *
	 * @return FadeToggleDropdownEffect
	 */
	FadeToggleDropdownEffect.prototype.hide = function() {
		var self = this;

		this.dropdown.stop().fadeOut({
			easing: self.element.data('appear-easing') ? self.element.data('appear-easing') : 'linear',
			duration: isFinite(self.element.data('appear-speed')) ? self.element.data('appear-speed') : 350
		});

		return this;
	}

	/**
	 * Constructor function for making dropdown effect object.
	 *
	 * @param jQuery element
	 */
	function SlideDownDropdownEffect(element) {
		this.element = element;
		this.dropdown = this.element.siblings('.dropdown-menu');
	}

	/**
	 * Shows dropdown element.
	 *
	 * @return SlideDownDropdownEffect
	 */
	SlideDownDropdownEffect.prototype.show = function() {
		var self = this,
				inlineNavbar = this.element.closest('[class*="u-navbar--inline-submenu"]');

		if(!this.dropdown.length) return this;

		if(inlineNavbar.length) {
			inlineNavbar.removeClass('u-navbar--overflow');

			this.dropdown.show();
			var ddOffset = this.dropdown.offset().left;
			this.dropdown.hide();

			if(ddOffset < 0) inlineNavbar.addClass('u-navbar--overflow');
		}

		smartPosition(this.dropdown);

		this.dropdown.stop().slideDown({
			easing: self.element.data('appear-easing') ? self.element.data('appear-easing') : 'linear',
			duration: isFinite(self.element.data('appear-speed')) ? self.element.data('appear-speed') : 350,
			complete: function() {
				focusElement(self.element);
			}
		});

		return this;
	}

	/**
	 * Hides dropdown element.
	 *
	 * @return SlideDownDropdownEffect
	 */
	SlideDownDropdownEffect.prototype.hide = function() {
		var self = this;

		this.dropdown.stop().slideUp({
			easing: self.element.data('appear-easing') ? self.element.data('appear-easing') : 'linear',
			duration: isFinite(self.element.data('appear-speed')) ? self.element.data('appear-speed') : 350
		});

		return this;
	}

	/**
	 * Constructor function for making dropdown effect object.
	 *
	 * @param jQuery element
	 */
	function SlideRightDropdownEffect(element) {
		this.element = element;
		this.dropdown = this.element.siblings('.dropdown-menu');
		this.w = $(window);

		this.toggleable = this.element.closest('[class*="navbar-toggleable-"]');

		if(this.toggleable.hasClass('navbar-toggleable-lg')) {
			this.breakpoint = 1200;
		}
		else if(this.toggleable.hasClass('navbar-toggleable-md')) {
			this.breakpoint = 992;
		}
		else if(this.toggleable.hasClass('navbar-toggleable-sm')) {
			this.breakpoint = 768;
		}
	}

	/**
	 * Shows dropdown element.
	 *
	 * @return SlideRightDropdownEffect
	 */
	SlideRightDropdownEffect.prototype.show = function() {
		var self = this;

		this.dropdown.css('width', 'auto')
				.data('initial-width', this.dropdown.outerWidth())
				.css({
					'width': 0,
					'min-width': 'initial'
				});

		if(this.breakpoint && this.w.width() > this.breakpoint) {
			this.dropdown.show().stop().animate({
				width: self.dropdown.data('initial-width')
			}, {
				easing: self.element.data('appear-easing') ? self.element.data('appear-easing') : 'linear',
				duration: isFinite(self.element.data('appear-speed')) ? self.element.data('appear-speed') : 350
			});
		}
		else{
			this.dropdown.css('width', 'auto').stop().slideDown({
				easing: self.element.data('appear-easing') ? self.element.data('appear-easing') : 'linear',
				duration: isFinite(self.element.data('appear-speed')) ? self.element.data('appear-speed') : 350
			});
		}

		return this;
	}

	/**
	 * Hides dropdown element.
	 *
	 * @return SlideRightDropdownEffect
	 */
	SlideRightDropdownEffect.prototype.hide = function() {
		var self = this;

		if(this.breakpoint && this.w.width() > this.breakpoint) {
			this.dropdown.stop().animate({
				width: 0
			}, {
				easing: self.element.data('appear-easing') ? self.element.data('appear-easing') : 'linear',
				duration: isFinite(self.element.data('appear-speed')) ? self.element.data('appear-speed') : 350,
				complete: function() {
					$(this).hide();
				}
			});
		}
		else{
			this.dropdown.stop().slideUp({
				easing: self.element.data('appear-easing') ? self.element.data('appear-easing') : 'linear',
				duration: isFinite(self.element.data('appear-speed')) ? self.element.data('appear-speed') : 350
			});
		}

		return this;
	}

})(jQuery);