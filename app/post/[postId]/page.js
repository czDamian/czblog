const SInglePost = ({ params }) => {
  const { postId } = params;
  return (
    <div>
      <div>
        <h1>Post Id: {JSON.stringify(postId)}</h1>
      </div>
    </div>
  );
};
export default SInglePost;
