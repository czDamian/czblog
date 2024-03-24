"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <Header />
      <div>{children}</div>
      <Footer />
    </SessionProvider>
  );
};
export default AuthProvider;
