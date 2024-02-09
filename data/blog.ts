import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllBlogPosts() {
  const blogPosts = await prisma.blogPost.findMany();
  return blogPosts;
}

export async function getBlogPostById(id: string) {
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });
  return blogPost;
}
