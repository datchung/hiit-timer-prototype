import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import T from '../../Localization/i18n';

class WorkoutProgress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0,
      timerCountdownId: 0,
    };

    this.onBackClick = this.onBackClick.bind(this);
  }

  componentDidMount() {
    var showTimer = function() {
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

    var isNullOrWhitespace = function(str) {
        return !str || !str.trim();
    };

    //var intervalId;
    //var timerCountdownId;

    console.info('Start clicked');

    // Get configuration
    const id = this.props.match.params.id;
    var recordById = this.props.records.find(t => t.id === id);
    if(!recordById) return;

    var intervalSeconds = recordById.intervalSeconds;
    var tasks = recordById.text.split("\n").filter(t => !isNullOrWhitespace(t));
    console.info('tasks', tasks);
    if(tasks.length < 1) return;

    document.getElementById('alarm').play();

    this.keepScreenOn();
    showTimer();

    // Clear previous runs
    $('#timer-display').html('');

    var i = 0;
    showTimerTask(i, tasks.length, tasks[i]);
    
    this.setState({
      ...this.state,
      timerCountdownId: startTimerCountdown(intervalSeconds)
    });

    var self = this;
    this.setState({
      ...this.state,
      intervalId: window.setInterval(function() {
        document.getElementById('alarm').play();

        if(++i > tasks.length - 1) {
            window.clearInterval(self.state.intervalId);
            window.clearInterval(self.state.timerCountdownId);
            self.resetKeepScreenOn();
            showTimerDone();
        }
        else {
            showTimerTask(i, tasks.length, tasks[i]);
            self.setState({
              ...self.state,
              timerCountdownId: startTimerCountdown(intervalSeconds)
            });
        }
      }, intervalSeconds * 1000)
  });
  }

  componentWillUnmount() {
    this.onBackClick();
  }

  onBackClick() {
    console.log('Stop clicked');

    window.clearInterval(this.state.intervalId);
    window.clearInterval(this.state.timerCountdownId);
    this.resetKeepScreenOn();

    this.props.history.goBack();
  }

  keepScreenOn() {
    if(typeof native !== 'undefined' && native != null) native.KeepScreenOn();
  }

  resetKeepScreenOn() {
    if(typeof native !== 'undefined' && native != null) native.ResetKeepScreenOn();
  }

  render() {
    return (
      <React.Fragment>
        <div className="columns is-mobile">
          <div className="column">
            <button className="button" onClick={this.onBackClick}>
              {T.t("back")}
            </button>
          </div>
        </div>

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