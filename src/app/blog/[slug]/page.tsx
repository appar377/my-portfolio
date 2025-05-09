import { getPost } from '@/lib/wordpress';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Image from 'next/image';
import Background from '@/components/Background';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getPost(params.slug);
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
    const formattedDate = format(new Date(post.date), 'yyyy.MM.dd', { locale: ja });

    return (
      <main className="relative min-h-screen w-full">
        <Background className="fixed" />
        <article className="container mx-auto px-4 py-16">
          {featuredImage && (
            <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src={featuredImage}
                alt={post.title.rendered}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
            <span>{formattedDate}</span>
            <span>|</span>
            <span>{category}</span>
          </div>
          <h1 
            className="mb-8 text-4xl font-bold text-white"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </main>
    );
  } catch (error) {
    notFound();
  }
} 