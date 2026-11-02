import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <aside className="w-64 border-r p-6">
        <h2 className="mb-6 text-xl font-bold">Dashboard</h2>

        <nav className="flex flex-col gap-4">
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard">Settings</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}