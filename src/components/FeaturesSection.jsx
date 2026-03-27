import Button from "./Button";

import tab1Illust from "/images/illustration-features-tab-1.svg";

function FeaturesSection() {
  return (
    <section className="flex flex-col gap-8 text-center">
      <div className="px-8 flex flex-col gap-4">
        <h2 className="text-[30px] font-medium leading-[135%]">Features</h2>
        <p className="text-[15px] leading-[165%] opacity-50">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>

      <div className="flex flex-col gap-11 px-8">
        <div>
          <p>Simple Bookmarking</p>
          <p>Speedy Searching</p>
          <p>Easy Sharing</p>
        </div>

        <div>
          <img src={tab1Illust} alt="Screen illustration" />
          <div className="bg-blue-600" />
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