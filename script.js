{
  var clearTime;
  var sec = 0,
    min = 0,
    hrs = 0;
  var secss, mins, gethrs;
  function Start_Watch() {
    //WHen sec is 60,min will be incremented by 1 and sec will be set to 0
    if (sec === 60) {
      sec = 0;
      min = min + 1;
    }
    mins = min < 10 ? "0" + min : min;
    //when min is 60,hrs will be incremented by 1 and min will be set to 0
    if (min === 60) {
      min = 0;
      hrs = hrs + 1;
    }
    gethrs = hrs < 10 ? "0" + hrs : hrs;
    secss = sec < 10 ? "0" + sec : sec;
    //Displaying the time
    var y = document.getElementById("clock-c");
    y.innerHTML = `
    <span class="h1 font-weight-bold">${gethrs}</span> Hr
    <span class="h1 font-weight-bold">${mins}</span> Min
    <span class="h1 font-weight-bold">${secss}</span> Sec
    `;
    sec++;
    clearTime = setTimeout("Start_Watch()", 1000);
  }
  function start_Time() {
    document.getElementById("time-tillnow").style.display = "none";
    document.getElementById("reset").style.display = "none";
    this.style.display = "none";
    Start_Watch();
  }
  function stop_Time() {
    if (sec !== 0 || min !== 0 || hrs !== 0) {
      var fulltime = document.getElementById("time-tillnow");
      fulltime.style.display = "block";
      var ftime = document.getElementById("clock-show");
      ftime.innerHTML = `
      <span class="h1 font-weight-bold">${gethrs}</span> Hr
      <span class="h1 font-weight-bold">${mins}</span> Min
      <span class="h1 font-weight-bold">${secss}</span> Sec
      `;
    }

    var x = document.getElementById("clock-c");
    x.innerHTML = `
    <span class="h1 font-weight-bold">${gethrs}</span> Hr
    <span class="h1 font-weight-bold">${mins}</span> Min
    <span class="h1 font-weight-bold">${secss}</span> Sec
    `;
    document.getElementById("reset").style.display = "block";
    var showStart = document.getElementById("start");
    showStart.style.display = "block";
    var showStop = document.getElementById("stop");
    showStop.style.display = "block";
    //will clear timer set with setTimeout method
    clearTimeout(clearTime);
  }
  function reset_Time() {
    var x = document.getElementById("clock-c");
    x.innerHTML = `
    <span class="h1 font-weight-bold">00</span> Hr
    <span class="h1 font-weight-bold">00</span> Min
    <span class="h1 font-weight-bold">00</span> Sec
    `;
    var showStart = document.getElementById("start");
    showStart.style.display = "block";
    var showStop = document.getElementById("stop");
    showStop.style.display = "block";
    var show=document.getElementById("clock-show");
    show.innerHTML=`
    <span class="h1 font-weight-bold">00</span> Hr
    <span class="h1 font-weight-bold">00</span> Min
    <span class="h1 font-weight-bold">00</span> Sec`;
    clearTimeout(clearTime);
    sec = 0;
    min = 0;
    hrs = 0;
  }
  window.addEventListener("load", function () {
    //Event when start button is clicked
    var reset = document.getElementById("reset");
    reset.addEventListener("click", reset_Time);
  });
  window.addEventListener("load", function () {
    //Event when stop button is clicked
    var stop = document.getElementById("stop");
    stop.addEventListener("click", stop_Time);
  });
  window.addEventListener("load", function () {
    //Event when reset button is clicked
    var start = document.getElementById("start");  
    start.addEventListener("click", start_Time);
  });
}
