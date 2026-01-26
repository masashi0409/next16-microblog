import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/src/app/types';

type ArticleListProps = {
  articles: Article[];
};

/**
 * 記事一覧コンポーネント
 */

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article) => (
        <article className='flex flex-col shadow my-4' key={article.id}>
          <Link href={`/articles/${article.id}`} className='hover:opacity-75'>
            <Image
              src={`https://picsum.photos/1280/600?random=${article.id}`}
              alt=''
              width={1280}
              height={600}
            />
          </Link>
          <div className='bg-white flex flex-col justify-start p-6'>
            <Link href='#' className='text-blue-700 text-sm font-bold pb-4'>
              Technology
            </Link>
            <Link
              href={`/articles/${article.id}`}
              className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'
            >
              {article.title}
            </Link>
            <p className='text-slate-900 text-sm pb-3'>
              Published on {new Date(article.createdAt).toLocaleString('ja-JP')}
            </p>
            <Link
              href={`/articles/${article.id}`}
              className='text-slate-900 pb-6'
            >
              {article.content.slice(0, 150) + '...'}
            </Link>
            <Link
              href={`/articles/${article.id}`}
              className=' text-pink-800 hover:text-black'
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
