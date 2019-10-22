var AudioModule = (function() {
  var _audioChannels;

  function initialize() {
    // http://www.storiesinflight.com/html5/audio.html
    var channel_max = 10;
    _audioChannels = [];
    for (var i = 0; i < channel_max; ++i) {
      _audioChannels[i] = [];
      _audioChannels[i].channel = new Audio();
      _audioChannels[i].finished = -1;
    }
  }

  function playAudio(audioId) {
    for (var i = 0; i < _audioChannels.length; ++i) {
      var thistime = new Date();
      var audioElement = document.getElementById(audioId);
      if (_audioChannels[i].finished < thistime.getTime()) {
        _audioChannels[i].finished = thistime.getTime() + audioElement.duration * 1000;
        _audioChannels[i].channel.src = audioElement.src;
        _audioChannels[i].channel.load();
        _audioChannels[i].channel.play();
        break;
      }
    }
  }

  return {
    initialize: initialize,
    playAudio: playAudio,
  };
}());

export default AudioModule;