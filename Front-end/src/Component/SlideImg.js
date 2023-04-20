import React,{useState}from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from'react-icons/bs';
const SlideImg = () => {
  const slide = [
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
  console.log("slide 0 :",slide[0].url);
  return (
    <div className="mx-auto text-center w-screen pt-12 pb-1 Object-cover hidden-overflow rounded-lg">
    <div className="duration-500 relative">
      <img
        className="p-4  w-[350px] mx-auto rounded-lg shadow-lg md:w-1/3"
        alt="Background Image"
        src={slide[2].url}
      />
    </div>
  </div>
  );
};
export default SlideImg;
