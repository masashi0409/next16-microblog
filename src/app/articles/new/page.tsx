'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import { createArticle } from '../../apiForJsonServer'; // json-server用
import { createArticle } from '@/src/app/api'; // Route Handler Api

/**
 * 記事投稿ページ
 */

const CreateArticle = () => {
  const router = useRouter();

  // 状態管理(useState)
  // フォーム
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // ローディング
  const [loading, setLoading] = useState(false);

  // フォーム送信ハンドラ
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページのリロードを防止
    setLoading(true);

    // APIエンドポイントにPOSTリクエストを送信
    await createArticle(id, title, content);

    setLoading(false);

    // ホームページにリダイレクト
    router.push('/');
    router.refresh();
  };

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>Create Article</h2>

      <form
        onSubmit={handleSubmit}
        className='bg-slate-100 p-6 rounded shadow-lg'
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            URL
          </label>
          <input
            type='text'
            value={id}
            onChange={(e) => setId(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            タイトル
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            本文
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20'
          ></textarea>
        </div>

        <div className='flex gap-4'>
          <button
            type='submit'
            className={`py-2 px-4 border rounded-md ${
              loading
                ? 'bg-slate-300 cursor-not-allowed'
                : 'bg-slate-400 hover:bg-slate-500'
            } text-white font-semibold focus:outline-none hover:cursor-pointer`}
            disabled={loading}
          >
            作成
          </button>
          <button
            type='button'
            onClick={() => router.push('/')}
            className='py-2 px-4 border rounded-md bg-slate-300 hover:bg-slate-400 text-gray-700 font-semibold focus:outline-none hover:cursor-pointer'
          >
            戻る
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
