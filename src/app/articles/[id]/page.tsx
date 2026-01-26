import React from 'react';
import Image from 'next/image';
// import { fetchArticleById } from '@/src/app/apiForJsonServer';
import { fetchArticleById } from '@/src/app/api';
import DeleteButton from '@/src/app/components/DeleteButton';

/**
 * 記事詳細ページ
 * 削除ボタンだけ切り離してクライアントサイド（use client）で動かす
 */
export default async function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // 記事データをAPIから取得
  const detailArticle = await fetchArticleById(id);

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src={`https://picsum.photos/1280/600?random=${id}`}
        width={1280}
        height={300}
        alt=''
      />
      <h1 className='text-4xl text-center mb-10 mt-10'>
        {detailArticle.title}
      </h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>{detailArticle.content}</p>
      </div>
      <div className='text-right mt-3'>
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
}
