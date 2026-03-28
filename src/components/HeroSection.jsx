import illustration from "/images/illustration-hero.svg";

import Button from "./Button";

function HeroSection() {
  return (
    <section className="flex flex-col gap-12 tablet:gap-18">
      <div className="relative px-2.5 pt-8 pb-2 flex tablet:px-14 tablet:pb-6">
        <img src={illustration} alt="Screen illustration" className="z-10 grow" />
        <div className="absolute bottom-0 right-0 bg-blue-600 w-[80%] h-[70%] rounded-l-full tablet:h-[65%] tablet:w-[70%]" />
      </div>

      <div className="px-7 text-center flex flex-col gap-6 tablet:px-28.5">
        <h1 className="text-[30px] leading-[135%] font-medium tablet:text-[48px] tablet:leading-[110%]">A Simple Bookmark<br/>Manager</h1>
        <p className="opacity-50 text-[15px] tablet:text-base">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="max-w-41.5 grow bg-blue-600 text-white tablet:text-[14px]">
            Get it on Chrome
          </Button>
          <Button className="max-w-41.5 grow bg-grey-50 text-blue-950 tablet:text-[14px]">
            Get it on Firefox
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;