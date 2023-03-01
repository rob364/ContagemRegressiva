(function () {
  const countdownDate = new Date("Marc 9, 2023 18:07:00");
  let daysLeftLabel = document.getElementById("daysLeft");
  let hoursLeftLabel = document.getElementById("hoursLeft");
  let minutesLeftLabel = document.getElementById("minutesLeft");
  let secondsLeftLabel = document.getElementById("secondsLeft");

  function startCountdown() {
    let timer = setInterval(() => {
      const today = new Date();

      let distance = countdownDate.getTime() - today.getTime();

      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));

      daysLeftLabel.innerHTML = days.toString().padStart(2, "0");
      hoursLeftLabel.innerHTML = hours.toString().padStart(2, "0");
      minutesLeftLabel.innerHTML = minutes.toString().padStart(2, "0");
      secondsLeftLabel.innerHTML = seconds.toString().padStart(2, "0");

      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown-title").innerHTML =
          "Mission Accomplished";
        document.getElementById("timer").innerHTML = "<h2>The end</h2>";
      }
    }, 1000);
  }
  startCountdown();
})();
