import { getUserStats } from "@/lib/dashboard";
import { getPostFeed, getFeaturedCreators } from "@/lib/posts";

export default async function DashboardPage() {
  const [stats, posts, creators] = await Promise.all([
    getUserStats(),
    getPostFeed(),
    getFeaturedCreators(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="mt-4 text-gray-600">
          Welcome to your CreatorHub dashboard.
        </p>
      </div>

       
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-5">
          <h2 className="text-gray-500">Total Posts</h2>
          <p className="mt-2 text-2xl font-bold">{stats.totalPosts}</p>
        </div>

        <div className="rounded-lg border p-5">
          <h2 className="text-gray-500">Total Views</h2>
          <p className="mt-2 text-2xl font-bold">{stats.totalViews}</p>
        </div>

        <div className="rounded-lg border p-5">
          <h2 className="text-gray-500">Total Comments</h2>
          <p className="mt-2 text-2xl font-bold">{stats.totalComments}</p>
        </div>
      </section>

   
      <section>
        <h2 className="mb-4 text-xl font-bold">Recent Posts</h2>

        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="rounded-lg border p-4">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {post.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section>
        <h2 className="mb-4 text-xl font-bold">Featured Creators</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {creators.map((creator) => (
            <div key={creator.id} className="rounded-lg border p-4">
              <h3 className="font-semibold">{creator.name}</h3>
              <p className="text-sm text-gray-600">{creator.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}