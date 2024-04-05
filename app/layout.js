import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "CZ Blog",
    template: "%s || CZ Blog",
  },
  description: "your first ever blog powered by web3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.className} grid grid-rows-[1fr_8fr_1fr] h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
