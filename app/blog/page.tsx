
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-10">
      <h1 className="text-3xl font-bold">
        CreatorHub Blog
      </h1>

      <p>Explore our latest articles.</p>

      <div className="flex flex-col gap-4">
        <Link href="/blog/first-post">
          First Post
        </Link>

        <Link href="/blog/second-post">
          Second Post
        </Link>

        <Link href="/blog/nextjs-guide">
          Next.js Guide
        </Link>
      </div>
    </main>
  );
}
