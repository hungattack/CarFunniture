import RoutListing from "@/components/Items/RoutListing";
import http from "@/utils/http";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const getData = async () => {
  const resT = await http.get("CategoryType/GetAll");
  const res = await http.get(`Category/GetAll/${resT.data[2].name}`);
  return res.data;
};
export const metadata: Metadata = {
  title: "Hướng dẫn",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: { categoryName: string; categoryId: number }[] = await getData();

  return (
    <div className="flex flex-wrap ">
      <RoutListing
        currentPath="Hướng dẫn"
        category="guide"
        title="Hướng dẫn"
        defaultR=""
        cate={data.map((r) => ({
          categoryId: r.categoryId,
          categoryName: r.categoryName,
        }))}
      />
      {children}
    </div>
  );
}
