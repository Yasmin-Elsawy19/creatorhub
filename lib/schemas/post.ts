import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title is too long"),

  content: z
    .string()
    .trim()
    .min(10, "Content must be at least 10 characters"),
});

export type PostFormValues = z.infer<typeof PostSchema>;