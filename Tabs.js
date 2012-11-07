/*
    Tabs, suitable for responsive design
    https://github.com/simonsmith/jQuery-Tabs
    @blinkdesign
*/

!function(global) {

    var wrap = function($) {

        var Tabs = function(container, options) {
            if (!(this instanceof Tabs)) {
                return new Tabs(container, options);
            }

            this.options = $.extend(true, {
                currentClass: 'tab-current',
                activeClass: 'js-tabs-active',
                onShow: function() {},
                activeTab: 0,
                selectors: {
                    navTabs: '.tab-nav li',
                    contentItems: '.tab-item'
                }
            }, options);

            this.container = $(container);
            this.navTabs = this.container.find(this.options.selectors.navTabs);
            this.contentItems = this.container.find(this.options.selectors.contentItems);

            this.setTab(this.options.activeTab);
            this.attachEvents();
            this.container.addClass(this.options.activeClass);
        };

        Tabs.prototype = {

            setTab: function(index) {
                var currentClass = this.options.currentClass;
                var currentNav = this.navTabs.eq(index);
                var currentItem = this.contentItems.eq(index);
                var cb = this.options.onShow;

                this.contentItems.attr({
                    'aria-expanded': false,
                    'aria-hidden': true
                });
                this.contentItems.add(this.navTabs).removeClass(currentClass);
                this.navTabs.attr('aria-selected', false);

                currentItem.add(currentNav).addClass(currentClass);
                currentNav.attr('aria-selected', true);
                currentItem.attr({
                    'aria-expanded': true,
                    'aria-hidden': false
                });

                if (typeof cb === 'function') {
                    cb.apply(this, [currentNav, currentItem, index]);
                }

                return this;
            },

            attachEvents: function() {
                var eventType = ('ontouchstart' in document.documentElement ? 'touchstart' : 'click');
                var self = this;

                this.container.on(eventType + '.tabs', this.options.selectors.navTabs + ' a', function(event) {
                    self.setTab($(this).parent().index());
                    event.preventDefault();
                });
            }

        };

        return Tabs;

    };

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], wrap);
    } else {
        global.jQuery.tabs = wrap(global.jQuery);
    }

}(this);
