import { FaSpinner } from "react-icons/fa";

const loading = () => {
  return (
    <section className=" w-full">
      <FaSpinner className="animate-spin text-6xl text-center mx-auto text-amber-500" />
    </section>
  );
};

export default loading;
