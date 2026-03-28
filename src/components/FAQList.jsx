import FAQItem from "./FAQItem";

function FAQList() {
  const items = [
    {
      question: "What is Bookmark?"
    },
    {
      question: "How can I request a new browser?"
    },
    {
      question: "Is there a mobile app?"
    },
    {
      question: "What about other Chromium browsers?"
    }
  ];

  return (
    <div>
      {items.map(item => (
        <FAQItem {...item} />
      ))}
    </div>
  )
}

export default FAQList;