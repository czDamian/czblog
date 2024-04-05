import { FaSpinner } from "react-icons/fa6";

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
