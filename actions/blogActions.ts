"use server";

import BlogPostSchema, { TBlogPost } from "@/schema/blogSchema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ResponseType<T> = {
  type: "error" | "success";
  data: T | null;
};

export async function createBlogPost(
  data: TBlogPost
): Promise<ResponseType<TBlogPost>> {
  try {
    const parsedData = BlogPostSchema.parse(data);

    const createdBlogPost = await prisma.blogPost.create({
      data: parsedData,
    });

    return {
      type: "success",
      data: createdBlogPost,
    };
  } catch (err) {
    return {
      type: "error",
      data: null,
    };
  }
}
