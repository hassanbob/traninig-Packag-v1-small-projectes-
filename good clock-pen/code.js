const clock = document.getElementById("clock");
const hourHand = clock.querySelector(".hour-hand");
const minuteHand = clock.querySelector(".min-hand");
const secondHand = clock.querySelector(".second-hand");
const digitalClock = clock.querySelector("#digital-clock");

function setTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hourDegrees = (hours / 12) * 360 + 180;
  const minuteDegrees = (minutes / 60) * 360 + 180;
  const secondDegrees = (seconds / 60) * 360 + 180;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  digitalClock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(setTime, 1000);
