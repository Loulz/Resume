var dictionary = {
        'greet': {
            'it': 'Ciao',
            'en': 'Hello',
            'fr': 'Salut',
        }
};
var langs = ['it', 'en', 'fr'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
    current_lang_index = ++current_lang_index % 3;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}

translate();