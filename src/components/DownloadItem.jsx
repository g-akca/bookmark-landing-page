import dotsImg from "/images/bg-dots.svg";

import Button from "./Button";

function DownloadItem({ img, name, ver }) {
  return (
    <div className="py-8 flex flex-col gap-6 bg-white shadow-[0_10px_20px_rgba(73,93,207,0.05)] rounded-[15px]">
      <div className="flex flex-col gap-8 items-center">
        <img src={img} alt={`${name} logo`} className="h-25" />
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-medium leading-[200%]">Add to {name}</h3>
          <p className="text-[15px] leading-[165%] opacity-50">Minimum version {ver}</p>
        </div>
      </div>

      <img src={dotsImg} alt="Dots" />

      <Button className="px-8 bg-blue-600 text-white self-center">
        Add & Install Extension
      </Button>
    </div>
  )
}

export default DownloadItem;