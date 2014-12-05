/******************
 * #FD00000
 * Type: jQuery
 * Description: Allows the developer to check if jQuery is enabled on the page and parse the version of it.
 ******************/

if (typeof jQuery === 'undefined') {
    throw new Error('My-app-name requires jQuery');
}

(function($) {
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((+version[0] < 2 && +version[1] < 9) || (+version[0] === 1 && +version[1] === 9 && +version[2] < 1)) {
        throw new Error('My-app-name requires jQuery version 1.9.1 or higher');
    }
}(window.jQuery));