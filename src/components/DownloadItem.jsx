import dotsImg from "/images/bg-dots.svg";

import Button from "./Button";

function DownloadItem({ img, name, ver }) {
  return (
    <div className="py-8 flex flex-col gap-6 bg-white shadow-[0_10px_20px_rgba(73,93,207,0.05)] rounded-[15px] tablet:py-6 tablet:gap-4 desktop:first:self-start desktop:last:self-end desktop:py-8 desktop:gap-6">
      <div className="flex flex-col gap-8 items-center tablet:gap-4 desktop:gap-8">
        <img src={img} alt={`${name} logo`} className="h-25 tablet:h-20 desktop:h-25" />

        <div className="flex flex-col gap-2 tablet:gap-0 desktop:gap-2">
          <h3 className="text-[24px] font-medium leading-[200%] tablet:text-[20px] tablet:leading-[120%] tablet:tracking-[0.25px]">Add to {name}</h3>
          <p className="text-[15px] leading-[165%] opacity-50 tablet:text-[14px] tablet:leading-[200%] tablet:tracking-[0.25px]">Minimum version {ver}</p>
        </div>
      </div>

      <img src={dotsImg} alt="Dots" />

      <Button className="px-8 bg-blue-600 text-white self-center tablet:text-[14px] tablet:leading-[200%] tablet:px-3 tablet:py-1 desktop:px-8 desktop:py-2.5 hover:text-blue-600 hover:outline-blue-600">
        Add & Install Extension
      </Button>
    </div>
  )
}

export default DownloadItem;