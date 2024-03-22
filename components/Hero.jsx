import Link from "next/link";
import Blog from "./Blog";

const categories = [
  { title: "General", link: "general" },
  { title: "Business", link: "business" },
  { title: "Entertainment", link: "entertainment" },
  { title: "Health", link: "health" },
  { title: "Science", link: "science" },
  { title: "Sports", link: "sports" },
  { title: "Technology", link: "technology" },
];
const Hero = () => {
  return (
    <section className="my-20 mx-4 p-4">
      <div>
        <h1 className="font-bold text-center text-2xl capitalize mb-10">
          See The Trending News
        </h1>
      </div>
      {/* categories or tags follows */}
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Web />
      </div>
      <div>
        <Blog/>
      </div>
    </section>
  );
};

const Mobile = () => {
  return (
    <div className="grid gap-1 ">
      {categories.map((category) => (
        <Link
          className="list-none bg-yellow-900 rounded px-2 py-1"
          key={category.title}
          href={category.link}>
          {category.title}
        </Link>
      ))}
    </div>
  );
};
const Web = () => {
  return (
    <div className="flex gap-2 ">
      {categories.map((category) => (
        <Link
          className="list-none bg-red-900 rounded-xl px-2 py-1"
          key={category.title}
          href={category.link}>
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default Hero;
