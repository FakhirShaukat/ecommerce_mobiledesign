
//Date, Time functions for the Home Page

const countdownDate = new Date("2025-04-01T00:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelectorAll(".time h1")[0].textContent = days.toString().padStart(2, "0");
    document.querySelectorAll(".time h1")[1].textContent = hours.toString().padStart(2, "0");
    document.querySelectorAll(".time h1")[2].textContent = minutes.toString().padStart(2, "0");
    document.querySelectorAll(".time h1")[3].textContent = seconds.toString().padStart(2, "0");
  } else {
    clearInterval(countdown);
    document.querySelector(".times").innerHTML = "EXPIRED";
  }
}, 1000);

