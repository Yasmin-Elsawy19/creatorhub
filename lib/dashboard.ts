import { cacheLife } from "next/cache";

export async function getUserStats() {
  "use cache";

  cacheLife("minutes");

  return {
    totalPosts: 12,
    totalViews: 3500,
    totalComments: 48,
  };
}