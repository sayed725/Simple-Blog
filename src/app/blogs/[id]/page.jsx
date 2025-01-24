const BlogDetails = async ({ params }) => {
  const { id } = await params;
  // Get single blog by id -->
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await res.json();
  return (
    <div className="flex items-center min-h-screen w-full md:w-2/3 mx-auto">
    <div className="bg-white shadow rounded p-6">
      <h1 className="text-4xl font-semibold text-blue-400">Title: {blog?.title}</h1>
      <h3 className="text-2xl font-medium my-3">
        <span className="font-semibold">Description:</span>
        {blog?.body}
      </h3>
    </div></div>
  );
};

export default BlogDetails;