export const metadata = {
  title: "Create Post",
};

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-bold my-8">Create New Post</h1>
        <form action="#" className="flex flex-col gap-4 w-[400px] m-auto">
          <input
            className="outline-none bg-custom-900"
            type="text"
            name="title"
            placeholder="Post Title"
          />
          <label htmlFor="category">Select Category</label>
          <select name="category" id="category">
            <option value="react">React</option>
            <option value="nextjs">NextJs</option>
            <option value="tailwindcss">Tailwind css</option>
          </select>
          <textarea
            className="outline-none bg-custom-900"
            name="content"
            placeholder="Post Content"
            cols="30"
            rows="10"></textarea>
          <input type="submit" value="Create Post" />
        </form>
      </div>
    </div>
  );
};
export default page;
