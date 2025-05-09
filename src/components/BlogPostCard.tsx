import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { WordPressPost } from '../types/wordpress';

interface BlogPostCardProps {
  post: WordPressPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
  const formattedDate = format(new Date(post.date), 'yyyy.MM.dd', { locale: ja });

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="overflow-hidden rounded-lg bg-white/5 transition-all duration-300 hover:bg-white/10">
        <div className="relative h-48 w-full overflow-hidden">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gray-200" />
          )}
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
            <span>{formattedDate}</span>
            <span>|</span>
            <span>{category}</span>
          </div>
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-400"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div 
            className="text-sm text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
      </article>
    </Link>
  );
} 