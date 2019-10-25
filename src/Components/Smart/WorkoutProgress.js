import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import T from '../../Localization/i18n';

class WorkoutProgress extends React.Component {
  componentDidMount() {
    var showTimer = function() {
        // $('#configuration').css({ display: 'none' });
        $('#timer').css({ display: 'block' });
    };

    var showTimerMessage = function(message) {
        $('#timer-display').append('<br/>' + message);
        $('html, body').animate({
            scrollTop: $(document).height()-$(window).height()},
            500
        );
    };

    var showTimerFlash = function() {
        $('body').addClass('background-flash');
        window.setTimeout(function() {
            $('body').removeClass('background-flash');
        }, 1000);
    };

    var showTimerTask = function(i, total, task) {
        showTimerMessage((i + 1) + '/' + total + ': '  + task);
        showTimerFlash();
    };

    var showTimerDone = function(i, total, task) {
        showTimerMessage('<p>Done</p>');
        showTimerFlash();
        showTimerCountdown();
    };

    var showTimerCountdown = function(timeRemaining) {
        if(timeRemaining) {
            $('#time-remaining').html('(' + timeRemaining + ')');
        }
        else {
            $('#time-remaining').html('');
        }
    };

    var startTimerCountdown = function(intervalSeconds) {
        var timeRemaining = intervalSeconds;
        var timerCountdownId;

        showTimerCountdown(timeRemaining--);
        timerCountdownId = window.setInterval(function() {
            if(timeRemaining < 1) {
                window.clearInterval(timerCountdownId);
            }
            else {
                showTimerCountdown(timeRemaining--);
            }
        }, 1000);

        return timerCountdownId;
    };

    var keepScreenOn = function() {
        if(typeof native !== 'undefined' && native != null) native.KeepScreenOn();
    };

    var resetKeepScreenOn = function() {
        if(typeof native !== 'undefined' && native != null) native.ResetKeepScreenOn();
    };

    var isNullOrWhitespace = function(str) {
        return !str || !str.trim();
    };

    // TODO type (info, success, warning, danger)
    // TODO buttons (cancel, ok, etc)
    // TODO button actions/callbacks
    var showModal = function(title, body) {
        $('#mainModal .modal-title').text(title);
        $('#mainModal .modal-body').text(body);
        $('#mainModal').modal('show');
    };

    var intervalId;
    var timerCountdownId;

    // $('#start').click(function() {
        console.info('Start clicked');

        // Get configuration
        const id = this.props.match.params.id;
        var recordById = this.props.records.find(t => t.id === id);
        if(!recordById) return;

        var tasks = recordById.text.split("\n");
        var intervalSeconds = recordById.intervalSeconds;
        
        // Check validity and clean up configuration
        // tasks = _.filter(tasks, function(task) {
        //     return !isNullOrWhitespace(task);
        // });
        console.info('tasks', tasks);
        if(tasks.length < 1) {
            // showModal('No exercises entered', 'Please enter one or more exercieses.');
            return;
        }

        document.getElementById('alarm').play();

        keepScreenOn();
        showTimer();

        // Clear previous runs
        $('#timer-display').html('');

        var i = 0;
        showTimerTask(i, tasks.length, tasks[i]);
        timerCountdownId = startTimerCountdown(intervalSeconds);

        intervalId = window.setInterval(function() {
            document.getElementById('alarm').play();

            if(++i > tasks.length - 1) {
                window.clearInterval(intervalId);
                window.clearInterval(timerCountdownId);
                resetKeepScreenOn();
                showTimerDone();

                window.setTimeout(function() {
                    showConfiguration();
                }, 1500);
            }
            else {
                showTimerTask(i, tasks.length, tasks[i]);
                timerCountdownId = startTimerCountdown(intervalSeconds);
            }
        }, intervalSeconds * 1000);
    // });

    $('#stop').click(function() {
        console.log('Stop clicked');

        showConfiguration();

        window.clearInterval(intervalId);
        window.clearInterval(timerCountdownId);
        resetKeepScreenOn();
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="timer">
          <button id="stop" className="btn btn-warning">Stop</button>
          <span id="timer-display"></span>
          <span id="time-remaining"></span>
        </div>

        <audio id="alarm" controls="controls">
          <source id="alarm-sound" src="assets/alarm.mp3" type="audio/mpeg" />
        </audio>
      </React.Fragment>
    );
  }
}

export default WorkoutProgress;