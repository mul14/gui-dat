# gui-dat
This branch holds all stable versions of the minified **gui-dat**

In order to minify add the following files to one file:

+ gui.js
+ controllers/slider.js
+ controllers/controller.js
+ controllers/controller.boolean.js
+ controllers/controller.function.js
+ controllers/controller.number.js
+ controllers/controller.string.js
+ compress gui.css
+ add the compressed css into GUI constructor like so
    var head = document.getElementsByTagName('head')[0],
	    style = document.createElement('style'),
        css = "COMPRESSED-STYLE";
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
+ minify with desired compressor

Initiated by [George Michael Brower](http://georgemichaelbrower.com/) and [Jono Brandel](http://jonobr1.com/) of the Data Arts Team, Google Creative Lab.