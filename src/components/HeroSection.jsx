import illustration from "/images/illustration-hero.svg";

function HeroSection() {
  return (
    <section className="flex flex-col gap-12">
      <div className="relative px-2.5 pt-8 pb-2 flex justify-stretch items-stretch">
        <img src={illustration} alt="Screen illustration" className="z-10" />
        <div className="absolute bottom-0 right-0 bg-blue-600 w-[80%] h-[70%] rounded-l-full" />
      </div>

      <div>

      </div>
    </section>
  )
}

export default HeroSection;