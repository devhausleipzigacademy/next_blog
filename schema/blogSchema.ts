import { z } from "zod";

const BlogPostSchema = z.object({
  title: z.string().min(4, "title must be at least 4 chars").max(100),
  content: z.string().min(50, "content must be at least 50 chars").max(10000),
});
export default BlogPostSchema;

export type TBlogPost = z.infer<typeof BlogPostSchema>;
