"use strict";

function dateOfBirth() {
    var l = navigator.languages instanceof Array && navigator.languages.length > 0 ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    l = l.split("-");
    l = (l[0]).toLowerCase();

    var langs = ["il",  "ar",  "gr", "tr", "ru", "pt", "it", "fr", "es", "en", "de"];

    // if language is not supported, then fallback to english
    if (langs.indexOf(l) < 0)
        l = "en";

    var url = "http://www.miniportale.com/m/t/" + l + ".htm";

    appFramework.setConf("url", url);
    
    var Paths = {};
    Paths.URL_ROOT = AppFramework.URL_MODULES + "custom/";
    Paths.URL_SRC = Paths.URL_ROOT + "src/";
    Paths.URL_DATA = Paths.URL_ROOT + "data/";
    Paths.URL_TEMPLATE = Paths.URL_SRC + "template/";
    Paths.URL_CSS = Paths.URL_TEMPLATE + "css/";

    jQuery('head').append('<link rel="stylesheet" type="text/css" href="' + Paths.URL_CSS + 'style.css">');

    jQuery("#wrapper").load(Paths.URL_TEMPLATE + "wrapper.html", function () {
        jQuery("#logo").attr("src", Paths.URL_DATA + "img/logo.png");

        appFramework.loadExternal();
    });
}

dateOfBirth();
