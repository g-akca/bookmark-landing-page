import { useState } from "react";

import ArrowIcon from "./icons/ArrowIcon";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4 border-b border-[rgba(36,42,69,0.15)] first-of-type:border-t flex flex-col gap-4">
      <button type="button" onClick={() => setOpen(prev => !prev)} className="flex justify-between items-center cursor-pointer group">
        <p className="text-[15px] leading-[165%] tablet:text-base tablet:leading-base transition-all group-hover:text-red-400">{question}</p>
        <ArrowIcon className={open ? "rotate-180 text-red-400" : "rotate-0 text-blue-600"} />
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