(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  this.app = {
    init: function() {
      return $(__bind(function() {
        this.flashFade();
        $('[data-load-user]').live('click', function() {
          $('#sidebar').load($(this).data('load-user'));
          return false;
        });
        return _.each(['profile', 'address', 'contact'], function(data) {
          $("[data-edit-" + data + "]").live('click', function() {
            $("#sidebar_" + data).append('<div/>');
            $("#sidebar_" + data).children(':last').load($(this).data("edit-" + data), function() {
              return $("#sidebar_" + data).children(':not(:last)').hide();
            });
            return false;
          });
          return $("[data-cancel-" + data + "]").live('click', function() {
            $("#sidebar_" + data).children(':last').remove();
            $("#sidebar_" + data).children().show();
            return false;
          });
        });
      }, this));
    },
    flashFade: function() {
      return $('.flash').children().each(function(i) {
        return setTimeout((__bind(function() {
          return $(this).fadeOut();
        }, this)), 2250 + i * 750);
      });
    },
    reload: function() {
      return location.reload();
    }
  };
}).call(this);
