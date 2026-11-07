import { MOCK_POSTS } from "./posts";

type NewPost = {
  title: string;
  content: string;
};

export async function insertPublishedPost(data: NewPost) {
  const newPost = {
    id: Date.now(),
    slug: `post-${Date.now()}`,
    title: data.title,
    description: data.content,
    author: "Yasmin",
  };

  MOCK_POSTS.unshift(newPost);

  return newPost;
}