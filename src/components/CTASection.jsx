import { useState } from "react";

import Button from "./Button";

import errorIcon from "/images/icon-error.svg";

function CTASection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit() {
    if (!validateEmail(email)) {
      setError("Whoops, make sure it's an email");
    }
    else {
      setError("");
    }
  }

  return (
    <section className="bg-blue-600 h-90 px-8 text-center flex flex-col items-center justify-center gap-8 tablet:px-41">
      <div className="text-white tablet:flex tablet:flex-col tablet:gap-6 max-w-110.5">
        <p className="text-[12px] uppercase leading-[300%] font-medium tracking-[5px] tablet:text-[14px] tablet:font-semibold">35,000+ already joined</p>
        <h2 className="text-[30px] leading-[135%] font-medium tablet:text-[32px] tablet:leading-[125%] tablet:tracking-[-0.1px]">Stay up-to-date with what we’re doing</h2>
      </div>

      <div className="flex flex-col gap-4 tablet:flex-row w-full max-w-110.5">
        <div className={`w-full tablet:grow ${error ? "bg-red-400 rounded-b-[5px]" : ""}`}>
          <div className={`relative bg-white rounded-[5px] ${error ? "border-2 border-red-400" : ""}`}>
            <input
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 h-12 rounded-[5px] text-[15px] outline-none tablet:px-6 tablet:text-[14px]"
            />

            {error && (
              <img src={errorIcon} alt="Error icon" className="absolute right-3 top-1/2 -translate-y-1/2" />
            )}
          </div>

          {error && (
            <div className="text-white text-[10px] leading-[120%] italic px-4 pt-1 pb-1.5 text-left">
              {error}
            </div>
          )}
        </div>

        <Button
          handleClick={handleSubmit}
          className="shrink-0 h-12 bg-red-400 text-white tablet:text-[14px] tablet:w-31.5 hover:bg-white hover:text-red-400 hover:outline hover:outline-red-400"
        >
          Contact Us
        </Button>
      </div>
    </section>
  )
}

export default CTASection;