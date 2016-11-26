$(document).on("mobileinit", function() {
    $.mobile.autoInitializePage = false;
    $.mobile.hashListeningEnabled = false;
});

function mobileInitPage() {
    $.mobile.hashListeningEnabled = true;
    $.mobile.initializePage();
}

var change_page = function(page_id) {
    var htmlstr = $('#' + page_id).html();
    $('#main').html(htmlstr)
}

$(document).ready(function() {
    change_page('loading');
    setTimeout(function() {
        $('#text-detect').html('已偵測');
        $('#img-loading').attr('src', 'https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-128.png');
        setTimeout(function() {
            change_page('echim');
        }, 500);
    }, 3000);

});
