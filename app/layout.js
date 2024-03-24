import { Montserrat } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "czBlog",
  description: "created by czDamian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
