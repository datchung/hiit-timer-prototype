var DateTimeModule = (function() {
  function getNowMs() {
    return + new Date();
  }

  function getLocalString(ms) {
    var date = new Date(ms);
    return date.toDateString();
  }

  return {
    getNowMs: getNowMs,
    getLocalString: getLocalString,
  };
}());

export default DateTimeModule;