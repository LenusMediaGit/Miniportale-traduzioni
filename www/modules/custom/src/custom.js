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

    appFramework.loadExternal();
}

dateOfBirth();
