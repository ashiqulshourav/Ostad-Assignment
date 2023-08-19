"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import blogPosts from "../../data/blogData.json";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return (
    <>
      <div className="blogs">
        <div className="blogs-inner">
          <h2 className="text-2xl font-semibold">
            এখানে আপনি আমাদের সবধরনের ব্লগ পোস্ট গুলি পাবেন।
          </h2>
          <div className="blogs-links pt-3 pl-3">
            {posts.map((post) => {
              return (
                <div key={post.id}>
                  <h4 className="font-bold pb-3">
                    {post.id}.{" "}
                    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
