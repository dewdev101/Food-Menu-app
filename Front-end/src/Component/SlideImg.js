import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const SlideImg = () => {
  const slides = [
    {
      url: "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
    },
    {
      url: "https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg",
    },
    { url: "https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg" },
    { url: "https://i.ytimg.com/vi/Y-iH7nfeUCE/maxresdefault.jpg" },
    {
      url: "https://img-global.cpcdn.com/recipes/1ec6618e288a3f43/1200x630cq70/photo.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="mx-auto text-center w-screen pt-12 pb-1 Object-cover hidden-overflow rounded-lg relative group  ">
      <div className="duration-500 rounded-lg ">
        <img
          className="mt-2 w-[350px] h-[200px] md:h-[300px] mx-auto rounded-lg shadow-lg md:w-1/3  "
          alt="Background Image"
          src={slides[currentIndex].url}
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-3 md:left-[30%] text-xl cursor-pointer hover:bg-white hover:rounded-full ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-3 md:right-[30%] text-xl cursor-pointer hover:bg-white hover:rounded-full">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center py-2 text-2xl cursor-pointer">
        {slides.map((slide, slideIndex) => (
          <div>
            <RxDotFilled onClick={()=>goToSlide(slideIndex)} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SlideImg;
