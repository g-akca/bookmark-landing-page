import { useState } from "react";

import arrowIcon from "/images/icon-arrow.svg";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4 border-b border-[rgba(36,42,69,0.15)] first-of-type:border-t flex flex-col gap-4">
      <button type="button" onClick={() => setOpen(prev => !prev)} className="flex justify-between items-center">
        <p className="text-[15px] leading-[165%] tablet:text-base tablet:leading-base">{question}</p>
        <img src={arrowIcon} alt="Arrow icon" className={open ? "rotate-180" : "rotate-0"} />
      </button>

      {open && (
        <p className="opacity-75 font-light text-[15px] leading-[165%] tablet:text-[16px] tablet:leading-[225%] tablet:tracking-[0.5px]">
          {answer}
        </p>
      )}
    </div>
  )
}

export default FAQItem;