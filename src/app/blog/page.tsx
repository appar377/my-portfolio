import { getPosts } from '@/lib/wordpress';
import { BlogPostCard } from '@/components/BlogPostCard';
import Background from '@/components/Background';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="relative min-h-screen w-full">
      <Background className="fixed" />
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-white">Blog</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
