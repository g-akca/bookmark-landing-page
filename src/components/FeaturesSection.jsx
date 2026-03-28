import Button from "./Button";

import tab1Illust from "/images/illustration-features-tab-1.svg";

function FeaturesSection() {
  return (
    <section className="flex flex-col gap-8 text-center">
      <div className="px-8 flex flex-col gap-4">
        <h2 className="text-[30px] font-medium leading-[135%]">Features</h2>
        <p className="text-[15px] leading-[165%] opacity-50">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>

      <div className="flex flex-col gap-11">
        <div className="px-8 grid grid-rows-[repeat(3,60px)] text-[15px] leading-[165%] text-center border-t border-[rgba(73,93,207,0.2)]">
          <p 
            className="
              relative flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] 
              after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
              after:h-1 after:w-40.75 after:bg-red-400"
          >
            Simple Bookmarking
          </p>
          <p className="flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] opacity-75">
            Speedy Searching
          </p>
          <p className="flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] opacity-75">
            Easy Sharing
          </p>
        </div>

        <div className="relative px-8 pb-9">
          <img src={tab1Illust} alt="Screen illustration" className="relative z-10" />
          <div className="bg-blue-600 absolute left-0 bottom-0 w-[80%] h-[85%] rounded-r-full" />
        </div>
      </div>

      <div className="px-8 flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-[30px] font-medium leading-[135%]">Bookmark in<br/>one click</h2>
          <p className="text-[15px] leading-[165%] opacity-50">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
        </div>

        <Button className="w-28.5 bg-blue-600 text-white">
          More Info
        </Button>
      </div>
    </section>
  )
}

export default FeaturesSection;