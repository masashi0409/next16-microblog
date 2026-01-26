import Link from 'next/link';

export default function Header() {
  return (
    <header className='py-5 px-10 border-b flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-extrabold'>
          <Link href='/'>Blog</Link>
        </h1>
      </div>
      <div>
        <nav className='text-sm font-medium'>
          <Link
            href='/articles/new'
            className='bg-slate-700 px-6 py-3 rounded-md'
          >
            new
          </Link>
        </nav>
      </div>
    </header>
  );
}
