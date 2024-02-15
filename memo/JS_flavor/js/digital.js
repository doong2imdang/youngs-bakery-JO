const digitalTime = document.querySelector(".digital-time");
const digitalDate = document.querySelector(".digital-date");

const handleDigitalClock = () => {
  let date = new Date();
  let hour = modifyNumber(date.getHours());
  let min = modifyNumber(date.getMinutes());
  let sec = modifyNumber(date.getSeconds());

  let year = date.getFullYear();
  let month = modifyNumber(date.getMonth() + 1);
  let day = modifyNumber(date.getDate());

  digitalTime.innerHTML = hour + ":" + min + ":" + sec;
  digitalDate.innerHTML = day + "/" + month + "/" + year;

  console.log(hour, min, sec, year, month, day);
};

const modifyNumber = (number) => {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};

setInterval(handleDigitalClock, 1000);
