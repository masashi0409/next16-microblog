import { Article } from '@/src/app/types';
import { notFound } from 'next/navigation';

/**
 * 記事一覧を取得する
 *
 * @returns {Promise<Article[]>} 記事一覧の配列
 *
 */
export const fetchArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, {
    cache: 'no-store',
  });

  // エラーページを試す
  // throw new Error('Failed to fetch articles');

  // loadingページを試す
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = await res.json();
  return data;
};

/**
 * 特定の記事をIDで取得する
 *
 * @param {string} id - 記事のID
 * @returns {Promise<Article>} 指定されたIDの記事データ
 */
export const fetchArticleById = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  }); // ISR 60秒ごとに再検証 revalidate

  if (res.status === 404) {
    notFound();
  } else if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

/**
 * 新しい記事を作成する
 */
export const createArticle = async (
  id: string,
  title: string,
  content: string,
): Promise<void> => {
  const currentDate = new Date();

  const res = await fetch(`http://localhost:3001/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDate }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create article: ${res.status}`);
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await res.json();
  return newArticle;
};

/**
 * 記事を削除する
 */
export const deleteArticle = async (id: string): Promise<void> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error(`Failed to delete article: ${res.status}`);
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = await res.json();
  return data;
};
