
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 border-b">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          CreatorHub
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
