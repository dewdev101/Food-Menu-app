import { useState } from "react";
const faqs = [
  {
    question: <>ร้านอาหารเปิดกี่โมง</>,
    answer: <>ร้านเราเปิด 12:00 - 20:00 น.</>,
  },
  {
    question: <>เมนูเด็ดๆ ในร้านมีอะไรบ้าง</>,
    answer: <>เมนูแนะนำของร้านเราคือแกงส้มชะอมกุ้ง</>,
  },
  {
    question: <>มีเดลิเวอรี่มั้ย</>,
    answer: <>เรามีบริการส่งผ่าน Line Man, Shopee Food และ Grab</>,
  },
];
const FAQ = () => {
  const [toggles, setToggles] = useState([
    ...Array(faqs.length).map(() => false),
  ]);
  const openAnswer = (index) => {
    const newToggle = [...toggles]; //Copy array
    newToggle[index] = !newToggle[index]; // Switch boolean
    setToggles(newToggle);
  };
  return (
    <>
      {faqs?.map((r, index) => (
        <>
          <div  className="cursor-pointer"
                onClick={() => openAnswer(index)}>
            <div className="bg-blue-500 p-2 ">Question{index+1} : {r.question}</div>
            {toggles[index] && (
              <div className="bg-slate-200">Answer :{r.answer}</div>
            )}
          </div>
        </>
      ))}
    </>
  );
};
export default FAQ;
