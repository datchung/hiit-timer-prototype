var DateTimeModule = (function() {
  function getNowMs() {
    return + new Date();
  }

  function getLocalString(ms) {
    var date = new Date(ms);
    return date.toDateString();
    //return date.toLocaleDateString();
    //return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  return {
    getNowMs: getNowMs,
    getLocalString: getLocalString,
  };
}());

export default DateTimeModule;