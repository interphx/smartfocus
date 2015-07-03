(function($){
    $.smartfocus = function(el, options){
        var base = this;

        base.$el = $(el);
        base.el = el;
		base.device = null;
        
        base.init = function(){
			if (options == null) { options = {}; }
            base.options = $.extend({}, $.smartfocus.defaultOptions, options);
        };
        
        base.init();
    };
    
    $.smartfocus.defaultOptions = {
		'mouseClass': 'focus-mouse',
		'keyboardClass': 'focus-keyboard'
	};
	
	$.smartfocus.MOUSE = 0;
	$.smartfocus.KEYBOARD = 1;
	$.smartfocus.FOCUS_TIMEOUT = 0;
    
    $.fn.smartfocus = function(options){
        return this.each(function(){
            var base = (new $.smartfocus(this, options));
			$el = $(this);

			$el
				.on('mousedown', '*', function() { base.device = $.smartfocus.MOUSE; })
				.on('keydown', '*', function() { base.device = $.smartfocus.KEYBOARD; });
			
			$el.on('focus', '*', function(event){
				if (event.target !== this) { return; }
				var $self = $(this);
				
				setTimeout(function() {
					
					if (base.device === $.smartfocus.MOUSE) {
						
						if ($self.hasClass(base.options.keyboardClass)) { 
							$self.removeClass(base.options.keyboardClass); 
						}
						$self.addClass(base.options.mouseClass); 
						
					} else if (base.device === $.smartfocus.KEYBOARD) {
						
						if ($self.hasClass(base.options.mouseClass)) {
							$self.removeClass(base.options.mouseClass); 
						}
						$self.addClass(base.options.keyboardClass); 
						
					}

				
				}, $.smartfocus.FOCUS_TIMEOUT);
			});
			
			$el.on('blur', '*', function(){
				$self = $(this);
				$self.removeClass(base.options.mouseClass);
				$self.removeClass(base.options.keyboardClass);
			});

        });
    };
    
})(jQuery);