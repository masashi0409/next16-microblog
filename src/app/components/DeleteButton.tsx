'use client';

// import { deleteArticle } from '@/src/app/apiForJsonServer'; // json-server用
import { deleteArticle } from '@/src/app/api'; // Route Handler Api
import { useRouter } from 'next/navigation';

/**
 * Propsの型定義
 * @property {string} id - 削除する記事のID
 */
type DeleteButtonProps = {
  id: string;
};

/**
 * 記事削除ボタンコンポーネント
 */
const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteArticle(id);

    router.push('/');
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className='bg-red-500 hover:bg-red-700 rounded-md py-2 px-5 hover:cursor-pointer'
    >
      削除
    </button>
  );
};

export default DeleteButton;
