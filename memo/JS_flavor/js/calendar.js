const calendarYear = document.querySelector(".year");
const calendarMonth = document.querySelector(".month");
const calendarLayout = document.querySelector(".calendar-layout");
const previousMonthBtn = document.querySelector(".previous-month-btn");
const nextMonthBtn = document.querySelector(".next-month-btn");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

window.addEventListener("load", () => {
  displayYearMonth();
  displayCalendar();
  calculateStartLastDay();
});

const displayYearMonth = () => {
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
  const monthEng = months[month];
  calendarYear.innerHTML = year;
  calendarMonth.innerHTML = monthEng;
};

const calculateStartLastDay = () => {
  // 월의 마지막 일자 구하기
  let monthLastDay = new Date(year, month + 1, 0);
  let calendarMonthLastDay = monthLastDay.getDate();

  // 월의 1일이 출력되는 위치 구하기
  let monthStartDay = new Date(year, month, 1);
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

  displayCalendar(
    calendarMonthLastDay,
    calendarMonthStartDay,
    calendarWeekCount
  );
};

const displayCalendar = (
  calendarMonthLastDay,
  calendarMonthStartDay,
  calendarWeekCount
) => {
  // 달력 layout 만들기
  let html = "";
  let calendarPos = 0;
  let calendarDay = 0;
  for (let i = 0; i < calendarWeekCount; i++) {
    html += "<tr>";
    for (let j = 0; j < 7; j++) {
      html += "<td>";
      if (
        calendarMonthStartDay <= calendarPos &&
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
};

const onPrevBtn = () => {
  if (month === 0) {
    year = year - 1;
    month = 11;
  } else {
    month = month - 1;
  }

  displayYearMonth();
  displayCalendar();
  calculateStartLastDay();
};

const onNextBtn = () => {
  if (month === 11) {
    year = year + 1;
    month = 0;
  } else {
    month = month + 1;
  }

  displayYearMonth();
  displayCalendar();
  calculateStartLastDay();
};

previousMonthBtn.addEventListener("click", onPrevBtn);
nextMonthBtn.addEventListener("click", onNextBtn);
