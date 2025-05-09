import { WordPressPost, WordPressCategory } from '../types/wordpress';

const API_URL = 'https://rootscope.blog/wp-json/wp/v2';

export async function getPosts(page = 1, perPage = 10): Promise<WordPressPost[]> {
  const response = await fetch(
    `${API_URL}/posts?_embed&page=${page}&per_page=${perPage}`,
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export async function getPost(slug: string): Promise<WordPressPost> {
  const response = await fetch(
    `${API_URL}/posts?_embed&slug=${slug}`,
    { next: { revalidate: 3600 } }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const posts = await response.json();
  if (!posts.length) {
    throw new Error('Post not found');
  }

  return posts[0];
}

export async function getCategories(): Promise<WordPressCategory[]> {
  const response = await fetch(
    `${API_URL}/categories`,
    { next: { revalidate: 3600 } }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  return response.json();
} 