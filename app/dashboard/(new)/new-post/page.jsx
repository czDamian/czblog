const NewPost = () => {
  return (
    <div className="flex">
      <form action="" className="w-[350px] m-auto">
        <h1>Add Post</h1>
        <input type="text" name="post" placeholder="Post Title" />
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="react">React Js</option>
          <option value="next">Next Js</option>
          <option value="node">Node Js</option>
        </select>
        <textarea
          name="content"
          placeholder="Post content"
          cols="30"
          rows="10"></textarea>
        <input type="submit" value="Create Post" />
      </form>
    </div>
  );
};
export default NewPost;
