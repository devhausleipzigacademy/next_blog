import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllBlogPosts } from "@/data/blog";
import Link from "next/link";
import React from "react";

async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

  return (
    <div className="flex container m-auto gap-2">
      {blogPosts.map((blog) => {
        return (
          <Card key={blog.id}>
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-5">{blog.content}</p>
            </CardContent>
            <CardFooter>
              <Button size="full" asChild>
                <Link href={`/blog/${blog.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default BlogPage;
