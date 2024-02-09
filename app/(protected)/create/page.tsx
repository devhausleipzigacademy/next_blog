import BlogForm from "@/components/blog/blog-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

function CreateBlogPostPage() {
  return (
    <div className="container m-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create a new Blog post</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateBlogPostPage;
