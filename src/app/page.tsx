"use client";
import styles from "./styleHomePage.module.scss";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components

import SlideHome from "@/components/Slide/SlideHome";
import Image from "next/image";
import InputSearch from "@/components/Items/InputSearch";
import SlideCategory from "@/components/Slide/SlideCategory";
import { SiShopee } from "react-icons/si";
import http from "@/utils/http";
import Link from "next/link";
export default function Home() {
  const [dataProducts, setDataProducts] = useState<
    {
      id: number;
      name: string;
      price: number;
      price_After: number;
      description: string;
      urlShoppe: string;
      urlImage: { image: string; path: string }[];
    }[]
  >([]);
  const [dataNews, setDataNews] = useState<
    {
      id: number;
      name: string;
      create_Date: string;
      content: string;
      urlImage: { image: string; path: string }[];
    }[]
  >([]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageChoice, setPageChoice] = useState<number>(1);
  const [dataGuid, setDataGuid] = useState<
    {
      id: number;
      name: string;
      create_Date: string;
      content: string;
      urlImage: { image: string; path: string }[];
    }[]
  >([]);
  const [dataList, setDataList] = useState<{ id: number; name: string }[]>([]);
  const [caseChose, setCaseChose] = useState<{
    categoryId: number;
    categoryName: string;
  }>({ categoryId: 0, categoryName: "" });
  const [loadingType, setLoadingType] = useState<boolean>(false);
  const fetS = async () => {
    setDataList([]);
    setLoadingType(true);
    const resCate = await http.get<
      { categoryName: string; categoryId: number }[]
    >(`Category/GetAll/Sản phẩm`);
    setCaseChose(resCate.data[0]);
    fetSData();
    setDataList(
      resCate.data.map((r) => ({ id: r.categoryId, name: r.categoryName }))
    );
    const resNews = await http.post("Blog/GetPaginationProduct", {
      pageIndex: 1,
      pageSize: 4,
      search_CategoryName: "",
    });
    setDataNews(resNews.data.data);
    const resGuide = await http.post("Guide/GetPaginationProduct", {
      pageIndex: 1,
      pageSize: 5,
      search_CategoryName: name,
    });
    setDataGuid(resGuide.data.data);
    setLoadingType(false);
  };
  const fetSData = async (index: number = 1) => {
    const res = await http.post("Product/GetPaginationProduct", {
      pageIndex: index,
      pageSize: 2,
      search_CategoryName: caseChose.categoryName,
    });
    console.log("page size", res.data);

    setPageIndex(res.data.totalPageIndex);
    setDataProducts(res.data.data);
  };
  useEffect(() => {
    fetS();
  }, []);
  const handle = (v: number) => {
    const cases = dataList
      .filter((r) => r.id === v)
      .map((r) => ({ categoryId: r.id, categoryName: r.name }))[0];
    setCaseChose(cases);
    fetSData();
  };
  console.log(
    Array.from({ length: pageIndex }, (_, index) => index + 1),
    "page size"
  );

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
            <SlideCategory
              loading={loadingType}
              data={dataList}
              onClick={handle}
              active={caseChose.categoryId}
            />
          </div>
          <div className="w-full text-center flex items-center justify-center my-3 p-2 ">
            {Array.from({ length: pageIndex }, (_, index) => index + 1).map(
              (p) => (
                <div
                  key={p}
                  className="flex"
                  onClick={() => {
                    if (p !== pageChoice) {
                      fetSData(p);
                      setPageChoice(p);
                    }
                  }}
                >
                  <p
                    className={`mx-1 ${
                      pageChoice === p ? "text-[crimson]" : ""
                    } cursor-pointer`}
                  >
                    {p}
                  </p>
                  {pageIndex === p ? "" : <p className="mx-1 ">/</p>}
                </div>
              )
            )}

            {/* <p className="mx-1 cursor-pointer">2</p>
            <p className="mx-1">/</p>
            <p className="mx-1 cursor-pointer">3</p>
            <p className="mx-1">...</p>
            <p className="mx-1">/</p>
            <p className="mx-1 cursor-pointer">4</p> */}
          </div>
          <div>
            <div className="w-full flex flex-wrap mt-8 px-1 justify-center">
              {dataProducts.map((r, index) => (
                <Link
                  href="/[slug]"
                  as={`products/${caseChose.categoryName}/${r.name}/${r.id}`}
                  key={r.id}
                  className={`w-[200px] ${
                    dataProducts.length === index + 1 ? "" : "mr-4"
                  } md:w-[300px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer`}
                >
                  <div className="w-full h-[200px] md:h-[280px]">
                    <img
                      src={r.urlImage[0]?.image}
                      alt={r.urlImage[0]?.path}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`mt-1 ${styles.containerProductTag}`}>
                    <h3
                      className={`font-bold text-sm md:text-base ${styles.nameTag}`}
                    >
                      {r.name}
                    </h3>
                    <div className="w-full mt-1 md:mt-2 flex items-center border-b border-solid">
                      <p className="text-[13px] md:text-[14px] font-medium text-[crimson]">
                        {r.price.toLocaleString("en-US").replace(/,/g, ".")}
                      </p>
                      {r.price_After && (
                        <p className="text-[10px] md:text-[11px] mt-[5px] ml-2 line-through">
                          {r.price_After
                            .toLocaleString("en-US")
                            .replace(/,/g, ".")}
                        </p>
                      )}
                    </div>
                    <p
                      className={`text-[13px] md:text-[14px] mt-2 md:mt-3 ${styles.desTag}`}
                    >
                      {" "}
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
                    <a
                      href="#"
                      className="absolute top-[5px] right-[10px] md:right-[40px]"
                      style={{ color: "crimson !important" }}
                    >
                      <SiShopee />
                    </a>
                  </div>
                </Link>
              ))}{" "}
            </div>
          </div>{" "}
          <div className="flex mt-3 flex-wrap max-h-[785px] h-auto overflow-hidden border-b">
            <div
              className={`w-1/2 h-fit flex flex-wrap justify-around ${styles.news}`}
            >
              <h3 className="text-base w-full font-semibold text-center my-5">
                Tin tuc
              </h3>
              <div className="flex flex-wrap justify-around">
                {dataNews.map((n) => (
                  <div
                    key={n.id}
                    className="w-[200px] xl:w-[250px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer mr-2"
                  >
                    <div className="w-full h-[180px] xl:[200px]">
                      <img
                        src={n.urlImage[0]?.image}
                        alt={n.urlImage[0]?.path}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`mt-1 ${styles.containerProductTag}`}>
                      <h3 className={`font-bold text-sm  ${styles.nameTag}`}>
                        {n.name}
                      </h3>
                      <div
                        className={`text-[13px] ${styles.desTag}`}
                        dangerouslySetInnerHTML={{
                          __html:
                            ' <strong className="text-[crimson]">*</strong>' +
                            n.content,
                        }}
                      ></div>
                    </div>
                    <div className="my-2 flex items-center justify-center relative">
                      <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                        View more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>{" "}
            <div
              className={`w-1/2 h-fit flex flex-wrap justify-around ${styles.news}`}
            >
              <h3 className="text-base w-full font-semibold text-center my-5">
                Huong dan
              </h3>
              <div className="flex flex-wrap justify-around">
                {dataGuid.map((n) => (
                  <div
                    key={n.id}
                    className="w-[200px] xl:w-[250px] p-1 border shadow-[0_0_3px_#7a7a7a] hover:shadow-[0_0_10px] mb-4 cursor-pointer mr-2"
                  >
                    <div className="w-full h-[180px] xl:[200px]">
                      <img
                        src={n.urlImage[0]?.image}
                        alt={n.urlImage[0]?.path}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`mt-1 ${styles.containerProductTag}`}>
                      <h3 className={`font-bold text-sm  ${styles.nameTag}`}>
                        {n.name}
                      </h3>
                      <div
                        className={`text-[13px] ${styles.desTag}`}
                        dangerouslySetInnerHTML={{
                          __html:
                            ` <strong className="text-[crimson]">*</strong>` +
                            n.content,
                        }}
                      ></div>
                    </div>
                    <div className="my-2 flex items-center justify-center relative">
                      <button className="text-sm shadow-[0_0_2px_#4a8cbf] border-[#4a8cbf] border-[1px] p-1 pr-3 rounded-md">
                        View more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
