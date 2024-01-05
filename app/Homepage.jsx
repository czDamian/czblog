"use client";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();

  return (
    <section className="text-center text-lg mt-20">
      <div>
        <div>Welcome to czBlog </div>
        <div>A personal blog </div>
        <div> dediated to bringing you</div>
        <div> the latest news in the blockchain industry</div>
      </div>
      <div className="cz-flex my-8">
        <button onClick={() => router.push("/login")}>Login</button>
        <button onClick={() => router.push("/register")}>Register</button>
      </div>
      
    </section>
  );
};

export default Homepage;
