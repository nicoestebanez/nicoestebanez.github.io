function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    var timeOfDay = ( h < 12 ) ? "AM" : "PM";
    if (h > 12) {
        h = h - 12
    }
    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s + " " + timeOfDay;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}