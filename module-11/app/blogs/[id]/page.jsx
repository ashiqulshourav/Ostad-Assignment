import blogPosts from "@/data/blogData.json";

export default function Post({ params }) {
  const id = params.id;
  const postData = blogPosts.find((post) => post.id === Number(id));

  return (
    <>
      <div key={postData.id}>
        <h1 className="text-4xl font-bold mb-8">{postData.title}</h1>
        <p className="text-lg">{postData.content}</p>
      </div>
    </>
  );
}
