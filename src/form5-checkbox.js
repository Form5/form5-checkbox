
(function () {
  'use strict';
  var pluginName = 'checkbox',
    defaults = {
      toggle: function () {},
      init: function () {},
      debug: false
    };

  $[pluginName] = function (element, options) {
    this.element = element;
    this.el = {
      checkbox: $(element)
    };

    this.options = $.extend({}, defaults, options);
    this.debug = this.options.debug;

    this._defaults = defaults;
    this._name = pluginName;

    var initCB = $.Callbacks('stopOnFalse');
    initCB.add($.proxy(this.initialize,this));
    if (typeof this.options.init === 'function') {
      initCB.add($.proxy(this.options.init,this));
    }
    initCB.fire();
  };

  $[pluginName].prototype = {
    initialize: function () {
      if (this.debug) console.dir('initialize()', this);

      this.createElements();
      this.compile();
      this.attachEvents();
    },

    createElements: function () {
      this.el.wrap = $('<checkbox />');

      if (this.debug) this.el.wrap.attr('debug',true);

      $.each(this.el.checkbox.prop('attributes'),$.proxy(function(index,item) {
        this.el.wrap.attr(item.name, item.value);
      },this));
    },

    compile: function (){
      this.el.checkbox.before(this.el.wrap);
      this.el.wrap.append(this.el.checkbox);
    },

    attachEvents: function (){
      this.el.wrap.on('click',$.proxy(function(){
        if (this.debug) console.log('toggle checkbox');

        if (this.el.checkbox.prop('checked') === true) {
          this.el.checkbox.prop('checked',false);
          this.el.wrap.attr('checked',false);
        } else {
          this.el.checkbox.prop('checked',true);
          this.el.wrap.attr('checked',true);
        }

        if (typeof this.options.toggle === 'function') {
          this.options.toggle(this.el.wrap);
        }
      },this));
    },

    destroy: function (){
      if (this.debug) console.log('destroying checkbox',this);

      this.el.checkbox.detach().insertAfter(this.el.wrap);
      this.el.wrap.remove();
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$(this).data('form5-'+pluginName)) {
        if (options === 'destroy') return;
        $(this).data('form5-'+pluginName, new $[pluginName](this, options));
      } else {
        var $form5Checkbox = $(this).data('form5-'+pluginName);
        switch (options) {
          case 'destroy':
            $form5Checkbox.destroy();
            $(this).removeData('form5-'+pluginName);
            break;
          default:
            if (typeof options === 'number') $form5Checkbox.activateTab(options);
        }
      }
    });
  };

}).call(this);