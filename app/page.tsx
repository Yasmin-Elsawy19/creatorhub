
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-10 text-center">
      <h1 className="text-4xl font-bold">
        Welcome to CreatorHub
      </h1>

      <p className="max-w-xl text-gray-600">
        Your space to create, manage, and share amazing content.
      </p>

      <Link
        href="/blog"
        className="rounded-lg bg-black px-6 py-3 text-white"
      >
        Explore Blog
      </Link>
    </main>
  );
}
