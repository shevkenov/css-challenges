//const time = new Date();
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function animate() {
  const time = new Date();
  const hour = time.getHours() + time.getMinutes() / 60;
  const minute = time.getMinutes() + time.getSeconds() / 60;
  const second = time.getSeconds() + time.getMilliseconds() / 1000;
  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
