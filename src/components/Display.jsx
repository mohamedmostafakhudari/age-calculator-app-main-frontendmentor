import React from "react";
import Period from "./Period";

export default function Display({ state }) {
  const currentDate = new Date();
  let year = currentDate.getFullYear() - state.year;
  let month = currentDate.getMonth() + 1 - state.month;
  if (month < 0) {
    year--;
  }
  let day = currentDate.getDate() - state.day;
  if (day < 0) {
    month--;
  }
  return (
    <div className="text-[3.425rem] tracking-tight leading-[60px] font-extrabold italic mt-8 md:text-7xl md:mt-0">
      <Period num={year} label={"years"} isEmpty={!state.year} />
      <Period
        num={month < 0 ? month + 12 : month}
        label={"months"}
        isEmpty={!state.month}
      />
      <Period
        num={day < 0 ? day + 30 : day}
        label={"days"}
        isEmpty={!state.day}
      />
    </div>
  );
}
function daysInMonth(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
      return 31;
    case 2:
      return leapYear(year) ? 29 : 28;
    default:
      return 30;
  }
}
function leapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
}
