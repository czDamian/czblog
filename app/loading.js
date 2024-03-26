import { FaSpinner } from "react-icons/fa6";
import Header from "@/components/Header";

import Footer from "@/components/Footer";


const loading = () => {
  return (
    <section className="grid">
      <div className="m-auto animate-spin text-3xl">
        <FaSpinner />
      </div>
    </section>
  );
};

export default loading;
