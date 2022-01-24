const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const dayPartElement = document.getElementById("day-part");

function animate() {
  const time = new Date();
  const hour = time.getHours() + time.getMinutes() / 60;
  let ampm = hour >= 12 ? 'PM' : 'AM';
  const minute = time.getMinutes() + time.getSeconds() / 60;
  const second = time.getSeconds() + time.getMilliseconds() / 1000;
  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);
  dayPartElement.textContent = ampm;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
