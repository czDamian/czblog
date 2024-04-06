import { Montserrat } from "next/font/google";
import "./globals.css";

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
      <body className={` ${montserrat.className} `}>{children}</body>
    </html>
  );
}
