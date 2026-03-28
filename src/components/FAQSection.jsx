import Button from "./Button";

import FAQList from "./FAQList";

function FAQSection() {
  return (
    <section className="px-8 flex flex-col gap-14">
      <div className="text-center flex flex-col gap-4">
        <h2 className="font-medium text-[30px] leading-[135%]">Frequently Asked Questions</h2>
        <p className="opacity-50 text-[15px] leading-[165%]">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>
      
      <FAQList />

      <Button className="w-28.5 bg-blue-600 text-white self-center">
        More Info
      </Button>
    </section>
  )
}

export default FAQSection;