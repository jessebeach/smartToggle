(function($) {

  // replace 'smartToggle' with the name of your plugin
  $.fn.smartToggle = function(action, options) {

    // debug(this);

    // build main options before element iteration
    var a = (options && (typeof action === "string")) ? action : null;
    var options = (action && (typeof options === "object")) ? options : action;
    // merge options with the defaults
    var opts = $.extend({}, $.fn.smartToggle.defaults, options);

    // iterate over matched elements
    return this.each(function() {
      var $this = $(this);
      // build element specific options. Uses the Metadata plugin if available
      // @see http://docs.jquery.com/Plugins/Metadata/metadata
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
      // implementations
      var visible = (!$this.hasClass('smart-hidden'));
      if (visible) {
        $this.fadeOut(o.speed).addClass('smart-hidden').show(0);
      }
      else {
        $this.hide(0).removeClass('smart-hidden').fadeIn(o.speed);
      }
    });
  };
    
  // plugin defaults
  $.fn.smartToggle.defaults = {
    action: null,
    vClass: "smart-visible",
    hClass: "smart-hidden",
    speed: 750
  };

  // public functions definition
  $.fn.smartToggle.functionName = function(foo) {
    return this;
  };
  
  // private functions definition
  function foobar() {}

  // private function for debugging
  function debug() {
    if (window.console && window.console.log)
      window.console.log('selection count: ' + $(this).size());
  };

})(jQuery);