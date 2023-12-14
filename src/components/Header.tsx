"use client";
import { Images } from "@/asset/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiDotsNineBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import http from "@/utils/http";
import Login from "./Login";
import moment from "moment";
const Header = () => {
  const [session, setSession] = useState<boolean>(false);
  const [firstCate, setFirstCate] = useState<{
    product: string;
    news: string;
    guide: string;
  }>({ product: "", news: "", guide: "" });
  const [auth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    getData();
    if (typeof window !== "undefined") {
      // your code
      const token = localStorage.getItem("token") ?? "";
      const refreshToken = localStorage.getItem("refreshToken") ?? "";
      const expire = localStorage.getItem("expiration") ?? "";
      console.log(moment(expire).format("YYYY-MM-DD HH:mm:ss"), "time");

      if (!token || !refreshToken || !expire) setAuth(true);
    }
  }, []);
  const getData = async () => {
    const res = await http.get("CategoryType/GetAll");

    const res1: any = await http.get(`Category/GetAll/${res.data[0]?.name}`);
    const res2 = await http.get(`Category/GetAll/${res.data[1]?.name}`);
    const res3 = await http.get(`Category/GetAll/${res.data[2]?.name}`);
    setFirstCate({
      product: res1.data[0]?.categoryName,
      news: res2.data[0]?.categoryName,
      guide: res3.data[0]?.categoryName,
    });
  };
  const active = window ? window.location.pathname : "";
  console.log(active.indexOf("news"), "active");
  const [onTab, setOnTab] = useState<boolean>(false);
  return (
    <div className="w-full 2xl:w-[1519px] bg-white flex justify-center h-auto sm:h-[125px] pt-4 border-b-2">
      {onTab && (
        <div
          className="w-full h-full absolute top-0 flex justify-end z-10 bg-[#000000ba]"
          onClick={() => setOnTab(false)}
        >
          <div
            className="h-full  w-[80%] shadow-[0_0_3px_#4e4e4e] bg-[#f3f3f3] "
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" w-full flex flex-wrap mt-[15px]">
              <Link
                href="/"
                className={`header_home w-full text-[#3a3b3b]  text-sm sm:text-base mx-4 max-sm:my-1 whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea] ${
                  !(active.indexOf("products") > 0) &&
                  !(active.indexOf("news") > 0) &&
                  !(active.indexOf("guides") > 0)
                    ? "text-[#42aaea]"
                    : ""
                }`}
                onClick={(e: any) => {
                  if (document) {
                    const hear = document?.querySelectorAll(".header_home");
                    Array.from(hear).map((h: any) => {
                      h.style.color = "#3a3b3b";
                    });
                    e.target.style.color = "#42aaea";
                  }
                }}
              >
                Trang chủ
              </Link>
              <Link
                href={`/news/${firstCate.news}`}
                className={`header_home w-full text-[#3a3b3b] ${
                  active.indexOf("news") > 0 ? "text-[#42aaea]" : ""
                } text-sm sm:text-base mx-4 max-sm:my-1 whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea]`}
                onClick={(e: any) => {
                  if (document) {
                    const hear = document?.querySelectorAll(".header_home");
                    Array.from(hear).map((h: any) => {
                      h.style.color = "#3a3b3b";
                    });
                    e.target.style.color = "#42aaea";
                  }
                }}
              >
                Tin tức
              </Link>
              <Link
                href={`/products/${firstCate.product}`}
                className={`header_home w-full text-[#3a3b3b] ${
                  active.indexOf("products") > 0 ? "text-[#42aaea]" : ""
                }  text-sm sm:text-base mx-4 max-sm:my-1 whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea]`}
                onClick={(e: any) => {
                  if (document) {
                    const hear = document?.querySelectorAll(".header_home");
                    Array.from(hear).map((h: any) => {
                      h.style.color = "#3a3b3b";
                    });
                    e.target.style.color = "#42aaea";
                  }
                }}
              >
                Danh sách sản phẩm
              </Link>
              <Link
                href={`/guides/${firstCate.guide}`}
                className={`header_home w-full  ${
                  active.indexOf("guides") > 0 ? "text-[#42aaea]" : ""
                } text-[#3a3b3b] text-sm sm:text-base mx-4 max-sm:my-1 whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea]`}
                onClick={(e: any) => {
                  if (document) {
                    const hear = document?.querySelectorAll(".header_home");
                    Array.from(hear).map((h: any) => {
                      h.style.color = "#3a3b3b";
                    });
                    e.target.style.color = "#42aaea";
                  }
                }}
              >
                Hưỡng dẫn
              </Link>
              <p
                onClick={() => setOnTab(false)}
                className="header_home w-full flex  text-[#3a3b3b] text-sm sm:text-base mx-4 max-sm:my-1 whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea]"
              >
                Ẩn thanh Tab <IoMdClose />
              </p>
              {auth ? (
                <div
                  className="flex ml-2  cursor-pointer"
                  onClick={() => setSession(true)}
                >
                  <p className="text-sm">Đăng nhập</p>
                </div>
              ) : (
                <div
                  className="flex ml-2 cursor-pointer "
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("refreshToken");
                    localStorage.removeItem("expiration");
                    setAuth(true);
                  }}
                >
                  <p className="text-sm">Đăng xuất</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="w-[80%] max-sm:w-full h-auto flex justify-between items-center sm:h-10 relative sm:pl-[93px] flex-wrap">
        <div className="flex max-sm:pl-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mr-2.5 sm:absolute left-0">
            <Image
              src={Images.logo}
              alt="car"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-bold">mazdashop.vn</h1>
            <p className="text-xs">chuyên cung cấp các đồ chơi xe chính hãng</p>
          </div>
        </div>
        {auth ? (
          <div
            className="flex max-sm:absolute max-sm:top-[5px] max-sm:right-11  cursor-pointer"
            onClick={() => setSession(true)}
          >
            <p className="text-sm">Đăng nhập</p>
          </div>
        ) : (
          <div
            className="flex max-sm:absolute max-sm:top-[5px] max-sm:right-11 cursor-pointer "
            onClick={async () => {
              const userName = localStorage.getItem("userName");
              const token = localStorage.getItem("token");
              const res = await http.get("User/Logout", {
                params: { username: userName },
                headers: { Authorization: "Bearer " + token },
              });
              // localStorage.removeItem("token");
              // localStorage.removeItem("refreshToken");
              // localStorage.removeItem("expiration");
              // setAuth(true);
            }}
          >
            <p className="text-sm">Đăng xuất</p>
          </div>
        )}
        <div className="hidden md:flex w-full max-sm:pl-[78px] max-sm:flex-wrap max-sm:justify-start sm:w-auto sm:absolute -bottom-11 left-[19%] md:left-[30%] justify-around sm:mt-3">
          <Link
            href="/"
            className={`header_home text-[#3a3b3b] ${
              !(active.indexOf("products") > 0) &&
              !(active.indexOf("news") > 0) &&
              !(active.indexOf("guides") > 0)
                ? "text-[#42aaea]"
                : ""
            } text-sm sm:text-base mx-4 max-sm:my-1 w-max whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea]`}
            onClick={(e: any) => {
              if (document) {
                const hear = document?.querySelectorAll(".header_home");
                Array.from(hear).map((h: any) => {
                  h.style.color = "#3a3b3b";
                });
                e.target.style.color = "#42aaea";
              }
            }}
          >
            Trang chủ
          </Link>
          <Link
            href={`/news/${firstCate.news}`}
            className={`header_home text-[#3a3b3b] ${
              active.indexOf("news") > 0 ? "text-[#42aaea]" : ""
            } text-sm sm:text-base mx-4 max-sm:my-1 w-max whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea]`}
            onClick={(e: any) => {
              if (document) {
                const hear = document?.querySelectorAll(".header_home");
                Array.from(hear).map((h: any) => {
                  h.style.color = "#3a3b3b";
                });
                e.target.style.color = "#42aaea";
              }
            }}
          >
            Tin tức
          </Link>
          <Link
            href={`/products/${firstCate.product}`}
            className={`header_home text-[#3a3b3b] ${
              active.indexOf("products") > 0 ? "text-[#42aaea]" : ""
            }  text-sm sm:text-base mx-4 max-sm:my-1 w-max whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea]`}
            onClick={(e: any) => {
              if (document) {
                const hear = document?.querySelectorAll(".header_home");
                Array.from(hear).map((h: any) => {
                  h.style.color = "#3a3b3b";
                });
                e.target.style.color = "#42aaea";
              }
            }}
          >
            Danh sách sản phẩm
          </Link>
          <Link
            href={`/guides/${firstCate.guide}`}
            className={`header_home ${
              active.indexOf("guides") > 0 ? "text-[#42aaea]" : ""
            } text-[#3a3b3b] text-sm sm:text-base mx-4 max-sm:my-1 w-max whitespace-pre-wrap font-medium cursor-pointer hover:text-[#42aaea]`}
            onClick={(e: any) => {
              if (document) {
                const hear = document?.querySelectorAll(".header_home");
                Array.from(hear).map((h: any) => {
                  h.style.color = "#3a3b3b";
                });
                e.target.style.color = "#42aaea";
              }
            }}
          >
            Hưỡng dẫn
          </Link>
        </div>

        <div
          className="flex w-full pr-[20px] pb-2 text-[20px] justify-end md:hidden"
          onClick={() => setOnTab(!onTab)}
        >
          <PiDotsNineBold />
        </div>
      </div>
      {session && <Login setSession={setSession} />}
    </div>
  );
};

export default Header;
