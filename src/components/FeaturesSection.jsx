import Button from "./Button";

import tab1Illust from "/images/illustration-features-tab-1.svg";

function FeaturesSection() {
  return (
    <section className="flex flex-col gap-8 text-center tablet:gap-16">
      <div className="px-8 flex flex-col gap-4 tablet:px-28.5">
        <h2 className="text-[30px] font-medium leading-[135%] tablet:text-[32px] tablet:leading-[125%] tablet:tracking-[-0.1px]">Features</h2>
        <p className="text-[15px] leading-[165%] opacity-50 tablet:text-base tablet:leading-base">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>

      <div className="flex flex-col gap-11">
        <div className="px-8 grid grid-rows-[repeat(3,60px)] text-[15px] leading-[165%] text-center border-t border-[rgba(73,93,207,0.2)] tablet:px-20 tablet:grid-rows-none tablet:grid-cols-3 tablet:text-[16px] tablet:leading-[110%] tablet:tracking-[0.5px] tablet:border-none">
          <p 
            className="
              relative flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] 
              after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
              after:h-1 after:w-40.75 after:bg-red-400 tablet:pb-7 tablet:after:w-50.75"
          >
            Simple Bookmarking
          </p>
          <p className="flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] opacity-75 tablet:pb-7">
            Speedy Searching
          </p>
          <p className="flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] opacity-75 tablet:pb-7">
            Easy Sharing
          </p>
        </div>

        <div className="relative px-8 pb-9 tablet:px-15 tablet:pb-22">
          <img src={tab1Illust} alt="Screen illustration" className="relative z-10 w-full tablet:pl-28" />
          <div className="bg-blue-600 absolute left-0 bottom-0 w-[80%] h-[85%] rounded-r-full tablet:w-[85%] tablet:h-[80%]" />
        </div>
      </div>

      <div className="px-8 flex flex-col gap-4 items-center tablet:px-40 tablet:gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-[30px] font-medium leading-[135%] tablet:text-[32px] tablet:leading-[125%] tablet:tracking-[-0.1px]">Bookmark in one click</h2>
          <p className="text-[15px] leading-[165%] opacity-50 tablet:text-base tablet:leading-base">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
        </div>

        <Button className="w-28.5 bg-blue-600 text-white tablet:text-[14px]">
          More Info
        </Button>
      </div>
    </section>
  )
}

export default FeaturesSection;