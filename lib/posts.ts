import { cacheLife, cacheTag } from "next/cache";

export const MOCK_POSTS = [
  {
    id: 1,
    slug: "first-post",
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js App Router.",
    author: "Yasmin",
  },
  {
    id: 2,
    slug: "second-post",
    title: "Understanding React Server Components",
    description: "Explore the power of Server Components.",
    author: "Yasmin",
  },
  {
    id: 3,
    slug: "nextjs-guide",
    title: "Next.js 16 Complete Guide",
    description: "Discover modern Next.js features.",
    author: "Yasmin",
  },
];

export const MOCK_CREATORS = [
  {
    id: 1,
    name: "Yasmin Elsawy",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Malak Mohamed",
    role: "Content Creator",
  },
];

export async function getPostFeed() {
  "use cache";

  cacheLife("hours");
  cacheTag("posts");

  await new Promise((resolve) => setTimeout(resolve, 800));

  return MOCK_POSTS;
}

export async function getFeaturedCreators() {
  "use cache";

  cacheLife("creators");
  cacheTag("creators");

  return MOCK_CREATORS;
}

export async function getPostBySlug(slug: string) {
  "use cache";

  cacheLife("hours");
  cacheTag("posts");
  cacheTag(`post-${slug}`);

  return MOCK_POSTS.find((post) => post.slug === slug) ?? null;
}