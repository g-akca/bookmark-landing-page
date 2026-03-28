import DownloadItem from "./DownloadItem";

import chromeLogo from "/images/logo-chrome.svg";
import firefoxLogo from "/images/logo-firefox.svg";
import operaLogo from "/images/logo-opera.svg";

function DownloadSection() {
  const items = [
    {
      img: chromeLogo,
      name: "Chrome",
      ver: "62"
    },
    {
      img: firefoxLogo,
      name: "Firefox",
      ver: "55"
    },
    {
      img: operaLogo,
      name: "Opera",
      ver: "46"
    }
  ];

  return (
    <section className="px-8 text-center flex flex-col gap-10 tablet:px-20 tablet:gap-16">
      <div className="flex flex-col gap-4 tablet:px-9">
        <h2 className="font-medium text-[30px] leading-[135%] tablet:text-[32px] tablet:leading-[125%]">Download the extension</h2>
        <p className="opacity-50 text-[15px] leading-[165%] tablet:text-base tablet:leading-base">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="px-4 flex flex-col gap-10 tablet:px-0 tablet:flex-row tablet:gap-2">
        {items.map(item => (
          <DownloadItem key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

export default DownloadSection;