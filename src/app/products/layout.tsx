import http from "@/utils/http";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const RoutListing = dynamic(() => import("@/components/Items/RoutListing"));
export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Generated by create next app",
};
const getData = async () => {
  const resT = await http.get("CategoryType/GetAll");
  const res = await http.get(`Category/GetAll/${resT.data[0].name}`);
  return res.data;
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: { categoryName: string; categoryId: number }[] = await getData();
  console.log("producc", data);
  const newData = data.map((r) => ({
    categoryId: r.categoryId,
    categoryName: r.categoryName,
  }));
  newData.push({
    categoryId: 9999,
    categoryName: "Đã xem",
  });
  return (
    <div className="flex flex-wrap">
      <RoutListing
        currentPath="products"
        title="Sản phẩm"
        category="product"
        defaultR={data[0].categoryName}
        cate={newData}
      />
      {children}
    </div>
  );
}
