import React from "react";
import { useState } from "react";
import InputField from "./InputField";
export default function Form({ state, dispatch }) {
  const [input, setInput] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  function handleChange(e) {
    setIsError(false);
    setIsSubmitted(false);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(isError);
    if (isError) return;
    dispatch(input);
  }
  function validate(time, date) {
    if (!isSubmitted) return;
    if (time === "day") {
      if (!date.day) {
        return "This field is required";
      } else if (date.day < 10 && !date.day.match(/0[1-9]/)) {
        return "Must match the format eg:05";
      } else if (
        date.day < 1 ||
        date.day > daysInMonth(parseInt(date.month), parseInt(date.year))
      ) {
        return "Must be a valid date";
      }
    } else if (time === "month") {
      if (!date.month) {
        return "This field is required";
      } else if (date.month < 10 && !date.month.match(/0[1-9]/)) {
        return "Must match the format eg:05";
      } else if (date.month < 1 || date.month > 12) {
        return "Must be a valid month";
      }
    } else if (time === "year") {
      if (!date.year) {
        return "This field is required";
      } else if (date.year < 1) {
        return "Must be a valid year";
      } else if (!date.year.match(/[1-2][0-9]{3}/)) {
        return "Must match the format";
      } else if (date.year > new Date().getFullYear()) {
        return "Must be in the past";
      }
    }
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

  return (
    <form action="/" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <InputField
          id="day"
          onChange={handleChange}
          value={input.day}
          error={validate("day", input)}
          isError={isError}
          setIsError={setIsError}
        />
        <InputField
          id="month"
          onChange={handleChange}
          value={input.month}
          error={validate("month", input)}
          isError={isError}
          setIsError={setIsError}
        />
        <InputField
          id="year"
          onChange={handleChange}
          value={input.year}
          error={validate("year", input)}
          isError={isError}
          setIsError={setIsError}
        />
      </div>
      <div className="relative md:hidden">
        <div className="absolute bg-border h-[1px] w-full top-1/2 -translate-y-1/2"></div>
        <button
          type="submit"
          className="block bg-primarytext w-fit rounded-full p-2 mx-auto mt-10 relative duration-200 ease-in-out hover:bg-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
            className="p-2"
          >
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
      <div className="hidden relative items-center md:flex">
        <div className="bg-border h-[1px] w-full top-1/2 -translate-y-1/2"></div>
        <button className="block bg-primarytext w-fit rounded-full p-2 mx-auto relative duration-200 ease-in-out hover:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
            className="p-2"
          >
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
    </form>
  );
}
