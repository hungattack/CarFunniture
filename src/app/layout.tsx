import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPhone } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Header />
          {children}
          <Footer />
          <a
            href="tel:0974034981"
            className="fixed bottom-5 left-2 flex items-center"
          >
            <div className="w-[50px] h-[50px] rounded-full bg-[#5BB006] flex items-center justify-center z-10">
              <FaPhone />
            </div>
            <h3 className="text-[15px]  bg-[#0099e6] rounded-[20px] font-semibold py-1 px-[11px] pl-[34px] relative right-[29px] text-white">
              0974034981
            </h3>
          </a>
        </>
      </body>
    </html>
  );
}
