import { Suspense } from 'react';
// import { fetchArticles } from './apiForJsonServer' // json-serverから取得
import { fetchArticles } from '@/src/app/api'; // Route Handler Apiで取得
import ArticleList from './components/ArticleList';
import Loading from './loading';

/**
 * 記事一覧ページ
 */

export default async function Home() {
  // 全記事取得

  // const articles = await fetchArticles();

  // Route Handler Apiで記事一覧を取得
  const articles = await fetchArticles();

  return (
    <div className='md:flex'>
      <section className='w-full md:w-3/4 flex flex-col items-center px-3'>
        <Suspense fallback={<Loading />}>
          <ArticleList articles={articles} />
        </Suspense>
      </section>

      <aside className='w-full md:w-1/4 flex flex-col items-center px-3 md:pl-6'>
        <div className='bg-white shadow-md rounded p-4 mb-6 mt-4 w-full'>
          <h3 className='font-bold text-gray-900 mb-2'>About Me</h3>
          <p className='text-gray-600'>marcie</p>
        </div>
        <div className='bg-white shadow-md rounded p-4 mb-6 mt-4 w-full'>
          <h3 className='font-bold text-gray-900 mb-2'>Category</h3>
          <ul className='text-gray-600 mt-2'>
            <li>
              <a href='#'>Technology</a>
            </li>
            <li>
              <a href='#'>Game</a>
            </li>
            <li>
              <a href='#'>Fashion</a>
            </li>
            <li>
              <a href='#'>Music</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
