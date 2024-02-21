const calendarYear = document.querySelector(".year");
const calendarMonth = document.querySelector(".month");
const calendarLayout = document.querySelector(".calendar-layout");

window.addEventListener("load", () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // 년도, 월 출력
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthEng = months[date.getMonth()];
  calendarYear.innerHTML = year;
  calendarMonth.innerHTML = monthEng;

  // 월의 마지막 일자 구하기
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 400 === 0) {
    monthDays[1] = 29;
  } else if (year % 100 === 0) {
    monthDays[1] = 28;
  } else if (year % 4 === 0) {
    monthDays[1] = 29;
  }

  // 월의 1일이 출력되는 위치 구하기
  let calendarMonthLastDay = monthDays[date.getMonth()];
  let monthStartDay = new Date(year, month + 1, 1);
  let calendarMonthStartDay = monthStartDay.getDay();
  console.log(
    "calendarMonthLastDay",
    calendarMonthLastDay,
    "calendarMonthStartDay",
    calendarMonthStartDay
  );

  // 달력의 주 수 계산
  let calendarWeekCount = Math.ceil(
    (calendarMonthStartDay + calendarMonthLastDay) / 7
  );
  console.log("calendarWeekCount", calendarWeekCount);

  // 달력 layout 만들기
  let html = "";
  let calendarPos = 0;
  let calendarDay = 0;
  for (let i = 0; i < calendarWeekCount; i++) {
    html += "<tr>";
    for (let j = 0; j < 7; j++) {
      html += "<td>";
      if (
        calendarMonthStartDay <= calendarPos + 1 &&
        calendarDay < calendarMonthLastDay
      ) {
        calendarDay++;
        if (calendarDay === day) {
          html += "<span class='today'>" + calendarDay + "</span>";
        } else {
          html += "<span>" + calendarDay + "</span>";
        }
      }
      html += "</td>";
      calendarPos++;
    }
    html += "</tr>";
  }

  calendarLayout.innerHTML = html;
});
