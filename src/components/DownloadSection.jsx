import DownloadItem from "./DownloadItem";

function DownloadSection() {
  return (
    <section className="px-8 text-center flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-[30px] leading-[135%]">Download the extension</h2>
        <p className="opacity-50 text-[15px] leading-[165%]">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="px-4 flex flex-col gap-10">
        <DownloadItem />
        <DownloadItem />
        <DownloadItem />
      </div>
    </section>
  )
}

export default DownloadSection;