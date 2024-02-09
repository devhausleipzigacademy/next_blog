"use client";
import BlogPostSchema, { TBlogPost } from "@/schema/blogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { createBlogPost } from "@/actions/blogActions";
import { useRouter } from "next/navigation";

function BlogForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const form = useForm<TBlogPost>({
    resolver: zodResolver(BlogPostSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onHandleSubmit(data: TBlogPost) {
    /*  const createdPost = await axios.post("/api/blog-posts", data);
    console.log(createdPost); */
    const responseData = await createBlogPost(data);
    if (responseData.type === "error") {
      return setError("Error creating blog post");
    }
    router.push("/blog");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onHandleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="some blog Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="write some blog info"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </Form>
  );
}

export default BlogForm;
