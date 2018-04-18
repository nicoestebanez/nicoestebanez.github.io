function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    var month = today.getMonth()
    var year = today.getFullYear()
    var day = today.getDay()
    var timeOfDay = ( h < 12 ) ? "AM" : "PM";
    if (h > 12) {
        h = h - 12
    }
    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    document.getElementById('pam').innerHTML =
        timeOfDay;
    document.getElementById('date').innerHTML =
        day + "/" + month + "/" + year;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}