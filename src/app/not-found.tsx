import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
        <p className='text-2xl font-semibold text-gray-600 mb-8'>
          ページが見つかりません
        </p>
        <p className='text-gray-500 mb-8'>
          お探しのページは存在しないか、削除されている可能性があります。
        </p>
        <Link
          href='/'
          className='inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
