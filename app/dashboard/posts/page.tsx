
import { getPostFeed } from "../../../lib/posts";
import CreatePostForm from "../../components/forms/create-post-form";

export default async function PostsPage() {
  const posts = await getPostFeed();

  return (
    <main className="mx-auto max-w-4xl space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Manage Posts</h1>
        <p className="mt-2 text-gray-600">
          Create and manage your blog posts.
        </p>
      </div>

      <CreatePostForm posts={posts} />
    </main>
  );
}
