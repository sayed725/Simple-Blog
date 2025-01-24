import BlogCard from "@/components/Blogcard";


const Blogs = async () => {
  // Get all blogs --->
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  return (
    <div className="min-h-screen container mx-auto">
     
      <div className="pb-6">
        <h1 className="text-3xl md:text-4xl py-5 lg:text-5xl mt-3 text-blue-400 text-center">All Blogs</h1>
      </div>
      {/* blogs container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice(0, 99).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {/* blogs container */}
    </div>
  );
};

export default Blogs;