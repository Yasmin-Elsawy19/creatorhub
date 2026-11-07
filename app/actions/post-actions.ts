
"use server";

import { revalidatePath } from "next/cache";
import { PostSchema } from "../../lib/schemas/post";
import { insertPublishedPost } from "../../lib/posts-store";

export type PostActionState = {
  success: boolean;
  errors: {
    title?: string[];
    content?: string[];
  };
  message?: string;
};

export async function createPost(
  previousState: PostActionState,
  formData: FormData
): Promise<PostActionState> {
  const rawData = Object.fromEntries(formData);
  const result = PostSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await insertPublishedPost(result.data);

    revalidatePath("/dashboard/posts");
    revalidatePath("/blog");

    return {
      success: true,
      errors: {},
    };
  } catch {
    return {
      success: false,
      errors: {},
      message: "Something went wrong. Please try again.",
    };
  }
}
