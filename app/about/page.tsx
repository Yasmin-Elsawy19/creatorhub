
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-3xl font-bold">
        About CreatorHub
      </h1>

      <p className="max-w-2xl text-center text-gray-600">
        CreatorHub is a platform designed for content creators
        to create, manage, and share their ideas.
      </p>

      <p className="max-w-2xl text-center text-gray-600">
        Our goal is to provide a simple space where creators
        can organize their content and connect with their audience.
      </p>

      <Link href="/" className="underline">
        Back to Home
      </Link>
    </main>
  );
}
