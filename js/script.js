$(document).ready(function() {
    console.log('ready');

    // http://www.storiesinflight.com/html5/audio.html
    var channel_max = 10;                                       // number of channels
    var audioChannels = [];
    for (a=0;a<channel_max;a++) {                                   // prepare the channels
        audioChannels[a] = [];
        audioChannels[a]['channel'] = new Audio();                      // create a new audio object
        audioChannels[a]['finished'] = -1;                          // expected end time for this channel
    }
    var playMultiSound = function(s) {
        for (a=0;a<audioChannels.length;a++) {
            thistime = new Date();
            if (audioChannels[a]['finished'] < thistime.getTime()) {            // is this channel finished?
                audioChannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
                audioChannels[a]['channel'].src = document.getElementById(s).src;
                audioChannels[a]['channel'].load();
                audioChannels[a]['channel'].play();
                break;
            }
        }
    };

    var showConfiguration = function() {
        // Show configuration
        $('#configuration').css({ display: 'block' });

        // Hide timer
        $('#timer').css({ display: 'none' });
    };

    var showTimer = function() {
        // Hide configuration
        $('#configuration').css({ display: 'none' });

        // Show timer
        $('#timer').css({ display: 'block' });
    };

    var intervalId;

    $('#start').click(function() {
        console.log('Start clicked');
        // playMultiSound('alarm-sound');
        document.getElementById('alarm').play();

        // Get configuration
        var ms = Number($('#ms').val()) || 30000;
        var tasks = $('#tasks').val().split('\n') || [];
        console.log('tasks', tasks);

        showTimer();

        // Clear previous runs
        $('#timer-display').html('');

        var i = 0;
        $('#timer-display').append('<p>' + (i + 1) + '/' + tasks.length + ': '  + tasks[i] + '</p>');
        $('html, body').animate({
            scrollTop: $(document).height()-$(window).height()},
            500
        );

        intervalId = window.setInterval(function() {
            // playMultiSound('alarm-sound');
            document.getElementById('alarm').play();

            if(++i > tasks.length - 1) {
                window.clearInterval(intervalId);
                $('#timer-display').append('<p>Done</p>');
                $('html, body').animate({
                    scrollTop: $(document).height()-$(window).height()},
                    500
                );

                window.setTimeout(function() {
                    showConfiguration();
                }, 1500);
            }
            else {
                $('#timer-display').append('<p>' + (i + 1) + '/' + tasks.length + ': '  + tasks[i] + '</p>');
                $('html, body').animate({
                    scrollTop: $(document).height()-$(window).height()},
                    500
                );
            }
        }, ms);
    });

    $('#stop').click(function() {
        console.log('Stop clicked');
        
        showConfiguration();

        window.clearInterval(intervalId);
    });
});