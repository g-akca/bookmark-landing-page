import { useState } from "react";

import Button from "./Button";

import tab1Illust from "/images/illustration-features-tab-1.svg";
import tab2Illust from "/images/illustration-features-tab-2.svg";
import tab3Illust from "/images/illustration-features-tab-3.svg";

function FeaturesSection() {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      img: tab1Illust,
      title: "Bookmark in one click",
      description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
      img: tab2Illust,
      title: "Intelligent search",
      description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
      img: tab3Illust,
      title: "Share your bookmarks",
      description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
  ];

  return (
    <section className="flex flex-col gap-8 tablet:gap-16 desktop:gap-18">
      <div className="px-8 flex flex-col gap-4 self-center text-center tablet:px-28.5 desktop:px-0 desktop:w-135">
        <h2 className="text-[30px] font-medium leading-[135%] tablet:text-[32px] tablet:leading-[125%] tablet:tracking-[-0.1px]">Features</h2>
        <p className="text-[15px] leading-[165%] opacity-50 tablet:text-base tablet:leading-base">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>

      <div className="px-8 grid grid-rows-[repeat(3,60px)] text-[15px] leading-[165%] text-center self-center w-full desktop:max-w-182.5 border-t border-[rgba(73,93,207,0.2)] tablet:px-20 tablet:grid-rows-none tablet:grid-cols-3 tablet:text-[16px] tablet:leading-[110%] tablet:tracking-[0.5px] tablet:border-none desktop:px-0">
        <button
          type="button" 
          onClick={() => setTab(0)}
          className={`
            relative flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] tablet:pb-7
            ${tab === 0 ? "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-40.75 after:bg-red-400 tablet:after:w-full" : "opacity-75"}
          `}
        >
          Simple Bookmarking
        </button>
        <button 
          type="button" 
          onClick={() => setTab(1)} 
          className={`
            relative flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] tablet:pb-7
            ${tab === 1 ? "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-40.75 after:bg-red-400 tablet:after:w-full" : "opacity-75"}
          `}
        >
          Speedy Searching
        </button>
        <button 
          type="button" 
          onClick={() => setTab(2)} 
          className={`
            relative flex items-center justify-center border-b border-[rgba(73,93,207,0.2)] tablet:pb-7
            ${tab === 2 ? "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-40.75 after:bg-red-400 tablet:after:w-full" : "opacity-75"}
          `}
        >
          Easy Sharing
        </button>
      </div>

      <div className="flex flex-col gap-8 text-center tablet:gap-16 desktop:gap-30 desktop:flex-row desktop:text-start desktop:items-center">
        <div className="relative px-8 pb-9 pt-2 tablet:px-15 tablet:pb-22 tablet:pt-0 desktop:px-0 desktop:shrink-0 desktop:w-176.25">
          <img src={tabs[tab].img} alt="Screen illustration" className="relative z-10 w-full tablet:pl-28 desktop:w-134 desktop:p-0 desktop:ml-auto" />
          <div className="bg-blue-600 absolute left-0 bottom-0 w-[80%] h-[85%] rounded-r-full tablet:w-[85%] tablet:h-[80%]" />
        </div>

        <div className="px-8 flex flex-col gap-4 items-center tablet:px-40 tablet:gap-6 desktop:pl-0 desktop:pr-42 desktop:items-start desktop:pb-18">
          <div className="flex flex-col gap-4 tablet:gap-6">
            <h2 className="text-[30px] font-medium leading-[135%] tablet:text-[32px] tablet:leading-[125%] tablet:tracking-[-0.1px]">{tabs[tab].title}</h2>
            <p className="text-[15px] leading-[165%] opacity-50 tablet:text-base tablet:leading-base">{tabs[tab].description}</p>
          </div>

          <Button className="w-28.5 bg-blue-600 text-white tablet:text-[14px]">
            More Info
          </Button>
        </div>
      </div>

      
    </section>
  )
}

export default FeaturesSection;