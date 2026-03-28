import Button from "./Button";

function CTASection() {
  return (
    <section className="bg-blue-600 h-90 px-8 text-center flex flex-col justify-center gap-8">
      <div className="text-white">
        <p className="text-[12px] uppercase leading-[300%] font-medium tracking-[5px]">35,000+ already joined</p>
        <h2 className="text-[30px] leading-[135%] font-medium">Stay up-to-date with what we’re doing</h2>
      </div>

      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Enter your email address" className="bg-white px-4 h-12 rounded-[5px] text-[15px] leading-[165%]" />
        <Button className="bg-red-400 text-white">
          Contact Us
        </Button>
      </div>
    </section>
  )
}

export default CTASection;