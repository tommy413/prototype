$(document).on("mobileinit", function() {
    $.mobile.autoInitializePage = false;
    $.mobile.hashListeningEnabled = false;
});

function mobileInitPage() {
    $.mobile.hashListeningEnabled = true;
    $.mobile.initializePage();
}

$(document).ready(function() {
    setTimeout(function() {
        $('#text-detect').html('已偵測');
        $('#img-loading').attr('src', 'https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-128.png');
        setTimeout(function() {
            window.location.href = '#home';
        }, 1500);
    }, 3000);

    $('#home > [role=main]').on('swipe', function( event ) {
      console.log(event);
    });


});
