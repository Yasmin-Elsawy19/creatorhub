export default function Loading() {
  return (
    <div className="space-y-4 p-6 animate-pulse">
      <div className="h-8 w-1/3 rounded bg-gray-200" />

      <div className="h-4 w-2/3 rounded bg-gray-200" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="space-y-3 rounded-lg border p-4"
          >
            <div className="h-40 rounded bg-gray-200" />
            <div className="h-5 w-3/4 rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}