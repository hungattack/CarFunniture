import http from "@/utils/http";
import React from "react";
const getProduct = async (detailed: string) => {
  const res = await http.get(`Product/GetByID/${detailed}`);
  return res.data;
};
const page = (props: { params: { detailed: string[] | string } }) => {
  //  const data:
  //    | {
  //        product: {
  //          name: string;
  //          price: number;
  //          price_After: number;
  //          description: string;
  //          urlShoppe: string;
  //        };
  //        categoryName: string;
  //        urlImage: { image: string; path: string }[];
  //        info_in_AboutUs: [{ url_Mess: string; phone: string }];
  //      }
  //    | undefined =
  //    typeof props.params.detailed === "string"
  //      ? undefined
  //      : await getProduct(props.params.detailed[1]);
  console.log(props, "props news");

  return (
    <div className="w-full min-[1000px]:flex justify-center">
      <div className="w-full min-[1200px]:w-[1200px] relative mt-15 border-t p-5">
        <div>
          <div className="w-fill h-[260px]">
            <img
              src="https://pasal.edu.vn/upload_images/images/2020/03/05/dfgdf.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[90%] h-[90%]">
            <h3 className="text-base md:text-[17px] font-bold">name </h3>
            <p className="text-sm ">date time</p>
          </div>
          <div className="min-[1000px]:flex">
            <div className="mt-5">
              <p className="text-xs md:text-[13px]">
                Điểm mù là những vùng không gian bên ngoài xe bị che khuất và
                không nằm trong tầm nhìn của người điều khiển. Nói cách khác,
                người điều khiển không thể nào quan sát được điểm mù thông Điểm
                mù là những vùng không gian bên ngoài xe bị che khuất và không
                nằm trong tầm nhìn của người điều khiển. Nói cách khác, người
                điều khiển không thể nào quan sát được điểm mù thông qua...
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;