import { Article } from '@/src/app/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

/**
 * RouteHandler方式
 */

/**
 * 記事一覧を取得する
 * src/app/api/posts/route.ts の GET関数を呼び出す
 *
 * @returns {Promise<Article[]>} 記事一覧の配列
 */
export const fetchArticles = async (): Promise<Article[]> => {
  const res = await fetch(`${API_URL}/posts`);

  // console.log(res);

  if (!res.ok) {
    throw new Error(`Failed to fetch articles: ${res.status}`);
  }

  const data = await res.json();
  // console.log(data);
  return data;
};

/**
 * 特定の記事をIDで取得する
 *
 * @param {string} id - 記事のID
 * @returns {Promise<Article>} 指定されたIDの記事データ
 */
export const fetchArticleById = async (id: string): Promise<Article> => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
};

/**
 * 記事を作成する
 */
export const createArticle = async (
  id: string, // idはslugとして使用
  title: string,
  content: string,
): Promise<Article> => {
  const res = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, title, content }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create article: ${res.status}`);
  }

  return res.json();
};
/**
 * 記事を削除する
 *
 * @param {string} id - 記事のID
 * @returns {Promise<void>}
 */
export const deleteArticle = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error(`Failed to delete article: ${res.status}`);
  }
};