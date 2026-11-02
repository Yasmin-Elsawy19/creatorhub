import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-10">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-600">Page Not Found</p>

      <Link href="/" className="underline">
        Back to Home
      </Link>
    </div>
  );
}