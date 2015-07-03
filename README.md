# Smartfocus

A jQuery plugin for detecting elements focused with keyboard or mouse. It adds specified classes to ```:focus``` elements depending on whether they were focused with mouse or keyboard.

### Usage

This plugin adds specified classes to elements focused using mouse or keyboard.

The most common use case is to disable highlighting of focused HTML elements when user clicks on them, but preserve the outline when one selects them using their keyboard (e.g. TAB key).

1. Add the script to your page:
```
<script src="jquery.smartfocus.js"></script>
```
2. Initialize it (parameters are optional, these are the defaults):
```
$(document).smartfocus({
        mouseClass: 'focus-mouse',
        keyboardClass: 'focus-keyboard'
    });
```
3. Add the following to your CSS:
```
    *:focus {
        outline-width: 0;
    }
    
    .focus-keyboard {
        outline-width: medium;
    }
```
That's all!

Of course you can use different styles for ```:focus``` or specify different class names.

Please note that while you can write the following code instead of the above, it will probably cause slight flickering when focus changes, so it is not advised to use this method:
```
.focus-mouse {
    outline: none;
}
```

### Browser support
This plugin was tested with latest Opera and Chrome. The script itself works fine with Firefox, but the browser handles focus styles quite differently, so you will have to experiment with CSS (try using -moz-focus-inner, etc).

### Future plans
* Test with IE
* Browser support improvements