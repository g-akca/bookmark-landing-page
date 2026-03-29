import Button from "./Button";

import FAQList from "./FAQList";

function FAQSection() {
  return (
    <section className="px-8 flex flex-col gap-14 tablet:px-28.5">
      <div className="text-center flex flex-col gap-4">
        <h2 className="font-medium text-[30px] leading-[135%] tablet:text-[32px] tablet:leading-[125%]">Frequently Asked Questions</h2>
        <p className="opacity-50 text-[15px] leading-[165%] tablet:text-base tablet:leading-base">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>
      
      <FAQList />

      <Button className="w-28.5 bg-blue-600 text-white self-center tablet:text-[14px] tablet:leading-[200%] tablet:py-2.5">
        More Info
      </Button>
    </section>
  )
}

export default FAQSection;