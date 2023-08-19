'use client';

import blogPosts from "@/data/blogData.json";
import { useEffect, useState } from "react";

export default function Post({ params }) {
  const id = params.id;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postData = blogPosts.find((post) => post.id === id);
    console.log(postData)
    setPost(postData);
  }, [id]);

  return (
    <>
        {/* <h1>{post.title}</h1>
        <p>{post.content}</p> */}
    </>
  );
}