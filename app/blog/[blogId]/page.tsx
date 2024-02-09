import { getBlogPostById } from "@/data/blog";
import React from "react";
import { redirect } from "next/navigation";

type SingleBlogPageProps = {
  params: {
    blogId: string;
  };
};

async function SingleBlogPage({ params }: SingleBlogPageProps) {
  const blogPost = await getBlogPostById(params.blogId);
  if (!blogPost) {
    return redirect("/404");
    //return <div>Blog Post Not Found</div>;
  }
  return (
    <div>
      <h1 className="text-3xl">{blogPost?.title}</h1>
      <p>{blogPost?.content}</p>
    </div>
  );
}

export default SingleBlogPage;
