"use client";

import GetAllBlogPost from "@/components/apiReq";
import Link from "next/link";

export default async function Blogs() {
  const posts = await GetAllBlogPost();
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
                    <Link href={`/blogs/${post.id}`}>{post.name}</Link>
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
