const hour = document.querySelector(".hr");
const minute = document.querySelector(".mn");
const second = document.querySelector(".sc");

setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  // 시침의 각도 계산: 시(hour) + 분(minute) / 60
  let hourAngle = (h % 12) * 30 + (m / 60) * 30; // 1시간당 30도, 1분당 0.5도
  let minuteAngle = m * 6; // 1분당 6도
  let secondAngle = s * 6; // 1초당 6도

  hour.style.transform = `rotateZ(${hourAngle}deg)`;
  minute.style.transform = `rotateZ(${minuteAngle}deg)`;
  second.style.transform = `rotateZ(${secondAngle}deg)`;
});
