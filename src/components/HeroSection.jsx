import illustration from "/images/illustration-hero.svg";

import Button from "./Button";

function HeroSection() {
  return (
    <section className="flex flex-col gap-12">
      <div className="relative px-2.5 pt-10 pb-2 flex justify-stretch items-stretch">
        <img src={illustration} alt="Screen illustration" className="z-10" />
        <div className="absolute bottom-0 right-0 bg-blue-600 w-[80%] h-[70%] rounded-l-full" />
      </div>

      <div className="px-7 text-center flex flex-col gap-6">
        <h1 className="text-[30px] leading-[135%] font-medium">A Simple Bookmark<br/>Manager</h1>
        <p className="opacity-50 text-[15px]">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="max-w-40.25 grow bg-blue-600 text-white">
            Get it on Chrome
          </Button>
          <Button className="max-w-40.25 grow bg-grey-50 text-blue-950">
            Get it on Firefox
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;