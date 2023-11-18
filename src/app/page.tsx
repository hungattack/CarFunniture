"use client";
import styles from "./styleHomePage.module.scss";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CiSearch } from "react-icons/ci";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SiShopee } from "react-icons/si";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SlideHome from "@/components/Slide/SlideHome";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full 2xl:w-[1519px]">
      <SlideHome />
      <div className="w-full h-40 bg-black flex flex-wrap">
        <div className="w-full pt-1 sm:w-[40%] sm:p-3 h-fit sm:h-full flex items-center justify-center">
          <p className="text-white">
            Các úng dụng và phần mềm hỗ trợ khác như ...
          </p>
        </div>
        <div className="w-full sm:w-[60%] h-fit sm:h-full flex items-center justify-center">
          <div>
            <div className="w-[150px] md:w-[190px] h-[40px] bg-[#d8ab6e] m-2 rounded-md"></div>
            <div className="w-[150px] md:w-[190px] h-[40px] bg-[crimson] m-2 rounded-md"></div>
          </div>
          <div>
            <div className="w-[150px] md:w-[190px] h-[40px] bg-[#4ce5ea] m-2 rounded-md"></div>
            <div className="w-[150px] md:w-[190px] h-[40px] bg-white m-2 rounded-md"></div>
          </div>
        </div>
      </div>
      <div className=" w-full mb-[100px] flex justify-center">
        <div className="w-full sm:w-[90%] ">
          <div className="w-full mt-2 mb-10">
            <h3 className="w-full pl-1 font-semibold text-base xl:text-lg">
              Danh sách sản phẩm
            </h3>
            <div
              className={`w-full flex  px-1 py-2 relative ${styles.pagination}`}
            >
              <div className="w-full bg-[aliceblue] ">
                <Swiper
                  slidesPerView={3}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    500: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    800: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                    1200: {
                      slidesPerView: 6,
                      spaceBetween: 40,
                    },
                  }}
                  modules={[Pagination]}
                  className={`${styles.mySwiper} `}
                >
                  <SwiperSlide>
                    <h3 className="text-xs text-[#004cff]  md:text-sm xl:text-base">
                      Redmi note 8 pro
                    </h3>
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    <h3 className="text-xs md:text-sm xl:text-base">
                      Redmi note 8 pro
                    </h3>
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    <h3 className="text-xs md:text-sm xl:text-base">
                      Redmi note 8 pro
                    </h3>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3 className="text-xs md:text-sm xl:text-base">
                      Redmi note 8 pro
                    </h3>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3 className="text-xs md:text-sm xl:text-base">
                      Redmi note 8 pro
                    </h3>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div>
            <div className="pl-1">
              <h3 className="w-full text-base xl:text-lg  font-semibold mb-2">
                Danh sách sản phẩm bán chạy
                <p className="text-sm font-normal">( Redmi note 8 pro )</p>
              </h3>
              <div>
                <div className="flex relative w-fit">
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-[#41af6b] shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md"
                  />
                  <div className="text-[20px] flex items-center justify-center p-1 absolute right-1 top-[2px]">
                    <CiSearch />
                  </div>
                  <div className="text-[14px] shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] rounded-md cursor-pointer flex items-center justify-center p-1 absolute right-[-70px] top-[2px]">
                    Tìm kiếm
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-wrap mt-8 px-1 justify-around">
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full text-center flex items-center justify-center mt-3 p-2 border-b">
              <p className="mx-1 text-[crimson] cursor-pointer">1</p>
              <p className="mx-1 ">/</p>
              <p className="mx-1 cursor-pointer">2</p>
              <p className="mx-1">/</p>
              <p className="mx-1 cursor-pointer">3</p>
              <p className="mx-1">...</p>
              <p className="mx-1">/</p>
              <p className="mx-1 cursor-pointer">4</p>
            </div>
          </div>{" "}
          <div className="mt-6">
            <div className="pl-1">
              <h3 className="w-full text-base xl:text-lg  font-semibold mb-2">
                Danh sách sản phẩm mới
                <p className="text-sm font-normal">( Redmi note 8 pro )</p>
              </h3>
              <div>
                <div className="flex relative w-fit">
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-[#41af6b] shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md"
                  />
                  <div className="text-[20px] flex items-center justify-center p-1 absolute right-1 top-[2px]">
                    <CiSearch />
                  </div>
                  <div className="text-[14px] shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] rounded-md cursor-pointer flex items-center justify-center p-1 absolute right-[-70px] top-[2px]">
                    Tìm kiếm
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-wrap mt-8 px-1 justify-around">
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>{" "}
              <div className="w-[200px] md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer">
                <div className="w-full h-[200px] md:h-[280px]">
                  <img
                    src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                    alt="car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`mt-1 ${styles.containerProductTag}`}>
                  <h3
                    className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                  >
                    Super Car HD Wallpaper in 2023
                  </h3>
                  <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                    <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                      100.000.000đ
                    </p>
                    <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                      102.000.000đ
                    </p>
                  </div>
                  <p
                    className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                  >
                    {" "}
                    <strong className="text-[crimson]">*</strong>
                    Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt của
                    một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho rằng
                    các mẫu siêu SUV không phải là thế mạnh của Lamborghini và
                    Urus 2023 sẽ bị lép vế trước những mẫu xe gầm thấp đã làm
                    nên tên tuổi của thương hiệu
                  </p>
                </div>
                <div className="my-2 flex items-center justify-center relative">
                  <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                    View more
                  </button>
                  <a
                    href="#"
                    className="absolute top-[5px] right-[10px] md:right-[40px]"
                    style={{ color: "crimson !important" }}
                  >
                    <SiShopee />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full text-center flex items-center justify-center mt-3 p-2 border-b">
              <p className="mx-1 text-[crimson] cursor-pointer">1</p>
              <p className="mx-1 ">/</p>
              <p className="mx-1 cursor-pointer">2</p>
              <p className="mx-1">/</p>
              <p className="mx-1 cursor-pointer">3</p>
              <p className="mx-1">...</p>
              <p className="mx-1">/</p>
              <p className="mx-1 cursor-pointer">4</p>
            </div>
          </div>
          <div className="flex mt-3 flex-wrap">
            <div
              className={`w-1/2 flex flex-wrap justify-around ${styles.news}`}
            >
              <h3 className="text-base w-full font-semibold text-center my-3">
                Tin tuc
              </h3>
              <div className="flex flex-wrap justify-around">
                <div className="w-[200px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer mr-2">
                  <div className="w-full h-[180px] ">
                    <img
                      src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                      alt="car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`mt-1 ${styles.containerProductTag}`}>
                    <h3 className={`font-bold text-sm  ${styles.nameTag}`}>
                      Super Car HD Wallpaper in 2023
                    </h3>
                    <h3 className="font-semibold text-[13px] mt-2">
                      Đó chính xác là gì?
                    </h3>
                    <p className={`text-[13px] ${styles.desTag}`}>
                      <strong className="text-[crimson]">*</strong>
                      Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt
                      của một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho
                      rằng các mẫu siêu SUV không phải là thế mạnh của
                      Lamborghini và Urus 2023 sẽ bị lép vế trước những mẫu xe
                      gầm thấp đã làm nên tên tuổi của thương hiệu
                    </p>
                  </div>
                  <div className="my-2 flex items-center justify-center relative">
                    <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                      View more
                    </button>
                  </div>
                </div>
                <div className="w-[200px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer mr-2">
                  <div className="w-full h-[180px] ">
                    <img
                      src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                      alt="car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`mt-1 ${styles.containerProductTag}`}>
                    <h3 className={`font-bold text-sm  ${styles.nameTag}`}>
                      Super Car HD Wallpaper in 2023
                    </h3>
                    <h3 className="font-semibold text-[13px] mt-2">
                      Đó chính xác là gì?
                    </h3>
                    <p className={`text-[13px] ${styles.desTag}`}>
                      <strong className="text-[crimson]">*</strong>
                      Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt
                      của một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho
                      rằng các mẫu siêu SUV không phải là thế mạnh của
                      Lamborghini và Urus 2023 sẽ bị lép vế trước những mẫu xe
                      gầm thấp đã làm nên tên tuổi của thương hiệu
                    </p>
                  </div>
                  <div className="my-2 flex items-center justify-center relative">
                    <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                      View more
                    </button>
                  </div>
                </div>
                <div className="w-[200px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer mr-2">
                  <div className="w-full h-[180px] ">
                    <img
                      src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                      alt="car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`mt-1 ${styles.containerProductTag}`}>
                    <h3 className={`font-bold text-sm  ${styles.nameTag}`}>
                      Super Car HD Wallpaper in 2023
                    </h3>
                    <h3 className="font-semibold text-[13px] mt-2">
                      Đó chính xác là gì?
                    </h3>
                    <p className={`text-[13px] ${styles.desTag}`}>
                      <strong className="text-[crimson]">*</strong>
                      Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt
                      của một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho
                      rằng các mẫu siêu SUV không phải là thế mạnh của
                      Lamborghini và Urus 2023 sẽ bị lép vế trước những mẫu xe
                      gầm thấp đã làm nên tên tuổi của thương hiệu
                    </p>
                  </div>
                  <div className="my-2 flex items-center justify-center relative">
                    <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                      View more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-1/2 flex flex-wrap justify-around ${styles.news}`}
            >
              <h3 className="text-base w-full font-semibold text-center my-3">
                Tin tuc
              </h3>
              <div className="flex flex-wrap justify-around">
                <div className="w-[200px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer mr-2">
                  <div className="w-full h-[180px] ">
                    <img
                      src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                      alt="car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`mt-1 ${styles.containerProductTag}`}>
                    <h3 className={`font-bold text-sm  ${styles.nameTag}`}>
                      Super Car HD Wallpaper in 2023
                    </h3>
                    <h3 className="font-semibold text-[13px] mt-2">
                      Đó chính xác là gì?
                    </h3>
                    <p className={`text-[13px] ${styles.desTag}`}>
                      <strong className="text-[crimson]">*</strong>
                      Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt
                      của một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho
                      rằng các mẫu siêu SUV không phải là thế mạnh của
                      Lamborghini và Urus 2023 sẽ bị lép vế trước những mẫu xe
                      gầm thấp đã làm nên tên tuổi của thương hiệu
                    </p>
                  </div>
                  <div className="my-2 flex items-center justify-center relative">
                    <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                      View more
                    </button>
                  </div>
                </div>
                <div className="w-[200px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer mr-2">
                  <div className="w-full h-[180px] ">
                    <img
                      src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                      alt="car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`mt-1 ${styles.containerProductTag}`}>
                    <h3 className={`font-bold text-sm  ${styles.nameTag}`}>
                      Super Car HD Wallpaper in 2023
                    </h3>
                    <h3 className="font-semibold text-[13px] mt-2">
                      Đó chính xác là gì?
                    </h3>
                    <p className={`text-[13px] ${styles.desTag}`}>
                      <strong className="text-[crimson]">*</strong>
                      Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt
                      của một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho
                      rằng các mẫu siêu SUV không phải là thế mạnh của
                      Lamborghini và Urus 2023 sẽ bị lép vế trước những mẫu xe
                      gầm thấp đã làm nên tên tuổi của thương hiệu
                    </p>
                  </div>
                  <div className="my-2 flex items-center justify-center relative">
                    <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                      View more
                    </button>
                  </div>
                </div>
                <div className="w-[200px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer mr-2">
                  <div className="w-full h-[180px] ">
                    <img
                      src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                      alt="car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`mt-1 ${styles.containerProductTag}`}>
                    <h3 className={`font-bold text-sm  ${styles.nameTag}`}>
                      Super Car HD Wallpaper in 2023
                    </h3>
                    <h3 className="font-semibold text-[13px] mt-2">
                      Đó chính xác là gì?
                    </h3>
                    <p className={`text-[13px] ${styles.desTag}`}>
                      <strong className="text-[crimson]">*</strong>
                      Lamborghini Urus 2023 có đầy đủ những phẩm chất ưu việt
                      của một chiếc siêu xe hàng đầu. Nhưng nhiều người vẫn cho
                      rằng các mẫu siêu SUV không phải là thế mạnh của
                      Lamborghini và Urus 2023 sẽ bị lép vế trước những mẫu xe
                      gầm thấp đã làm nên tên tuổi của thương hiệu
                    </p>
                  </div>
                  <div className="my-2 flex items-center justify-center relative">
                    <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                      View more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
