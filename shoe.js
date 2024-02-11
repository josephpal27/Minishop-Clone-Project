
let hour = document.getElementById('hour').innerText;
let min = document.getElementById('min').innerText;
let sec = document.getElementById('sec').innerText;
let day = document.getElementById('day').innerText;

setInterval(() => {
    sec--
    if (sec < 10) {
        sec = '0' + sec;
    }

    if (sec == '0' + 0) {
        sec = 60;
        min--

        if (min < 10) {
            min = '0' + min;
        }
    }

    if (min == '0' + 0) {
        min = 60;
        hour--

        if (hour < 10) {
            hour = '0' + hour;
        }
    }

    if (hour == '0' + 0) {
        hour = 24;
        day--
    }

    document.getElementById('sec').innerText = sec;
    document.getElementById('min').innerText = min;
    document.getElementById('hour').innerText = hour;
    document.getElementById('day').innerText = day;
}, 1000);