import React from "react";
import { useEffect } from "react";
export default function InputField({
  id,
  onChange,
  value,
  error,
  isError,
  setIsError,
}) {
  useEffect(() => {
    if (error) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [error]);
  return (
    <div className="md:flex md:flex-col">
      <label
        htmlFor={id}
        className={`text-label uppercase tracking-[2px] font-[700] text-xs ${
          isError && "text-error"
        }`}
      >
        {id}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={id === "day" ? "DD" : id === "month" ? "MM" : "YYYY"}
        className={`border border-border w-full text-xl font-semibold p-2 px-4 rounded-lg mt-1 duration-200 ease-in-out cursor-pointer hover:border-primarytext md:max-w-[120px] outline-none hover:outline-none focus:outline-none placeholder:text-label focus:border-primarytext ${
          isError && "border-error focus:border-error hover:border-error"
        }`}
      />
      <p className="text-xs font-regular italic text-error mt-2 max-w-[120px]">
        {isError && error}
      </p>
    </div>
  );
}
