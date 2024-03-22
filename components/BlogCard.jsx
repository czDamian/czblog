import Image from "next/image";
import blogImg from "@/public/iotx.jpg";
import Link from "next/link";

const blogDetails = [
  {
    id: 1,
    source: "wikipedia",
    title: "how to train your dragon",
    content:
      "to train your dragogn you havr to train your dragon to train it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam laboriosam perferendis repellat adipisci pariatur repellendus laborum modi fugit deleniti.",
    published: "2022-24-02",
    img: blogImg,
  },
  {
    id: 2,
    source: "google",
    title: "how to train your horse",
    content:
      "to train your horse you havr to train your horse to train it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam laboriosam perferendis repellat adipisci pariatur repellendus laborum modi fugit deleniti.",
    published: "2024-24-02",
    img: blogImg,
  },
  {
    id: 3,
    source: "bing",
    title: "how to train your AI",
    content:
      "to train your AI you havr to train your dragon to train it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam laboriosam perferendis repellat adipisci pariatur repellendus laborum modi fugit deleniti.",
    published: "2025-06-02",
    img: blogImg,
  },
];
const BlogCard = () => {
  return (
    <section className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {blogDetails.map((blog) => (
          <div
            key={blog.id}
            className="border-sm border-amber-400 bg-yellow-900 rounded-lg overflow-hidden ">
            <Image
              src={blog.img}
              width={300}
              height={300}
              className="object-cover w-full"
              alt="replace me later"
            />
            <div className="px-4 py-2">
              <div className="">
                <span className="font-bold"> Source: </span>
                <span>{blog.source}</span>
              </div>
              <div className="font-bold my-3 capitalize text-xl">
                <Link href={blog.source} className="text-white">
                  {blog.title}
                </Link>
              </div>
              <div className="opacity-80 text-justify text-sm my-4">
                {blog.content}{" "}
              </div>
              <div className="opacity-70 text-sm">
                <span className="font-bold">Published on: </span>
                <span>{blog.published}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BlogCard;
