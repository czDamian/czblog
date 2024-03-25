import { Raleway } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "czBlog",
  description: "designed by czDamian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
