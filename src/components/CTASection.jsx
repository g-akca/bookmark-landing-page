import Button from "./Button";

function CTASection() {
  return (
    <section className="bg-blue-600 h-90 px-8 text-center flex flex-col justify-center gap-8 tablet:px-41">
      <div className="text-white tablet:flex tablet:flex-col tablet:gap-6">
        <p className="text-[12px] uppercase leading-[300%] font-medium tracking-[5px] tablet:text-[14px] tablet:font-semibold">35,000+ already joined</p>
        <h2 className="text-[30px] leading-[135%] font-medium tablet:text-[32px] tablet:leading-[125%] tablet:tracking-[-0.1px]">Stay up-to-date with what we’re doing</h2>
      </div>

      <div className="flex flex-col gap-4 tablet:flex-row">
        <input type="text" placeholder="Enter your email address" className="bg-white px-4 h-12 rounded-[5px] text-[15px] leading-[165%] tablet:py-2 tablet:px-6 tablet:grow tablet:text-[14px] tablet:leading-[200%]" />
        <Button className="bg-red-400 text-white tablet:text-[14px] tablet:leading-[200%] tablet:w-31.5">
          Contact Us
        </Button>
      </div>
    </section>
  )
}

export default CTASection;