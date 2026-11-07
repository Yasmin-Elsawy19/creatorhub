import { revalidateTag } from 'next/cache';

export async function purgePostsCache() {
  revalidateTag('posts', 'hours');
}