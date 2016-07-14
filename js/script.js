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
        $('#configuration').css({ display: 'block' });
        $('#timer').css({ display: 'none' });
    };

    var showTimer = function() {
        $('#configuration').css({ display: 'none' });
        $('#timer').css({ display: 'block' });
    };

    var showTimerMessage = function(message) {
        $('#timer-display').append(message);
        $('html, body').animate({
            scrollTop: $(document).height()-$(window).height()},
            500
        );
    };

    var showTimerTask = function(i, total, task) {
        showTimerMessage('<p>' + (i + 1) + '/' + total + ': '  + task + '</p>');
    };

    var showTimerDone = function(i, total, task) {
        showTimerMessage('<p>Done</p>');
    };

    var intervalId;

    $('#start').click(function() {
        console.log('Start clicked');
        // playMultiSound('alarm-sound');
        document.getElementById('alarm').play();

        // Get configuration
        var intervalSeconds = Number($('#interval').val()) || 30;
        var tasks = $('#tasks').val().split('\n') || [];
        console.log('tasks', tasks);

        showTimer();

        // Clear previous runs
        $('#timer-display').html('');

        var i = 0;
        showTimerTask(i, tasks.length, tasks[i]);

        intervalId = window.setInterval(function() {
            // playMultiSound('alarm-sound');
            document.getElementById('alarm').play();

            if(++i > tasks.length - 1) {
                window.clearInterval(intervalId);
                showTimerDone();

                window.setTimeout(function() {
                    showConfiguration();
                }, 1500);
            }
            else {
                showTimerTask(i, tasks.length, tasks[i]);
            }
        }, intervalSeconds * 1000);
    });

    $('#stop').click(function() {
        console.log('Stop clicked');

        showConfiguration();

        window.clearInterval(intervalId);
    });
});