import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "CZ Blog",
    template: "%s || CZ Blog",
  },
  description: "your first ever blog powered by web3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night">
      <body
        className={` ${raleway.className} grid grid-rows-[1fr_8fr_1fr] h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
