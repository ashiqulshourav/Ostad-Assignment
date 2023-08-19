"use client";

import blogPosts from "@/data/blogData.json";
import { useEffect, useState } from "react";

export default function Post({ params }) {
  const id = params.id;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postData = blogPosts.find((post) => post.id === Number(id));
    setPost(postData);
  }, [id]);

  return (
    <>
      <div key={post.id}>
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <p className="text-lg">{post.content}</p>
      </div>
    </>
  );
}
