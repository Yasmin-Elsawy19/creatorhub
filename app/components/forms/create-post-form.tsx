
"use client";

import { useActionState, useOptimistic } from "react";
import {
  createPost,
  type PostActionState,
} from "../../actions/post-actions";
import { SubmitButton } from "./submit-button";

type Post = {
  id: number;
  slug: string;
  title: string;
  description: string;
  author: string;
};

const initialState: PostActionState = {
  success: false,
  errors: {},
};

export default function CreatePostForm({
  posts,
}: {
  posts: Post[];
}) {
  const [state, formAction, isPending] = useActionState(
    createPost,
    initialState
  );

  const [optimisticPosts, addOptimisticPost] = useOptimistic(
    posts,
    (currentPosts, newPost: Post) => [newPost, ...currentPosts]
  );

  return (
    <div className="space-y-8">
      <form
        action={async (formData) => {
          const title = String(formData.get("title") ?? "").trim();
          const content = String(formData.get("content") ?? "").trim();

          // Validate before showing the optimistic post
          if (title.length < 3 || title.length > 100 || content.length < 10) {
            formAction(formData);
            return;
          }

          const newPost: Post = {
            id: Date.now(),
            slug: `post-${Date.now()}`,
            title,
            description: content,
            author: "Yasmin",
          };

          addOptimisticPost(newPost);
          formAction(formData);
        }}
        className="space-y-4 rounded-xl border p-6"
      >
        <div>
          <label htmlFor="title" className="mb-2 block font-medium">
            Post Title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            required
            minLength={3}
            maxLength={100}
            className="block w-full rounded-lg border p-3"
          />

          {state.errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {state.errors.title[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="mb-2 block font-medium">
            Post Content
          </label>

          <textarea
            id="content"
            name="content"
            required
            minLength={10}
            className="block w-full rounded-lg border p-3"
          />

          {state.errors.content && (
            <p className="mt-1 text-sm text-red-500">
              {state.errors.content[0]}
            </p>
          )}
        </div>

        <SubmitButton />
      </form>

      {state.success && (
        <p className="text-green-600">
          Post published successfully!
        </p>
      )}

      {state.message && (
        <p className="text-red-500">{state.message}</p>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Posts</h2>

        {optimisticPosts.map((post, index) => {
          const isOptimistic = isPending && index === 0;

          return (
            <article
              key={post.id}
              className={`rounded-lg border p-4 ${
                isOptimistic ? "opacity-50" : ""
              }`}
            >
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.description}</p>

              {isOptimistic && (
                <span className="text-sm text-gray-500">
                  Saving...
                </span>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
