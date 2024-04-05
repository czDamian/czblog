const posts = [
  { id: 1, title: "this is the title", content: "this is the content" },
  { id: 2, title: "this is the title", content: "this is the content" },
  { id: 3, title: "this is the title", content: "this is the content" },
];

const BlogPosts = () => {
  return (
    <div>
      <h1>Recent Posts</h1>
      <div className="">
        {posts.map((post) => (
          <div key={post.id} className="bg-custom-800 rounded p-2 my-2">
            <div className="font-bold text-xl capitalize py-2">
              {post.title}
            </div>
            <div className="text-sm">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogPosts;
