var AudioModule = (function() {
  function playAudio(audioId) {
    document.getElementById(audioId).play();
  }

  return {
    playAudio: playAudio,
  };
}());

export default AudioModule;