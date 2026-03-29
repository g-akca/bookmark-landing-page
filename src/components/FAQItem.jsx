import arrowIcon from "/images/icon-arrow.svg";

function FAQItem({ question }) {
  return (
    <div className="py-4 border-b border-[rgba(36,42,69,0.15)] flex justify-between items-center first-of-type:border-t">
      <p className="text-[15px] leading-[165%] tablet:text-base tablet:leading-base">{question}</p>
      <img src={arrowIcon} alt="Arrow icon" />
    </div>
  )
}

export default FAQItem;