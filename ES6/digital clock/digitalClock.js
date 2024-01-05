document.addEventListener("DOMContentLoaded", function() {
    const hour = document.getElementById("hour");
    const minutes = document.querySelector(".min");
    const seconds = document.querySelector(".sec");

    const clock = setInterval(() => {
        let date = new Date();
        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        if (hr < 10) {
            hr = '0' + hr;
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }

        hour.textContent = hr;
        minutes.textContent = min;
        seconds.textContent = sec;
    }, 1000);
});
