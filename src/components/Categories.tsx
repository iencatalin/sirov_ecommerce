import Link from 'next/link';

export default function Categories() {
  return (
    <div className='bg-cream-dark text-slate-900 py-10 px-6'>
      <h5 className='text-brand-text border-slate-900 border-b font-medium text-lg font-sans'>
        categorii
      </h5>
      <div className='grid md:grid-cols-4 gap-4 pt-5'>
        <Link href='/products' className='bg-brand-bg text-slate-900 p-6'>
          Ceramica
        </Link>
        <Link href='/products' className='bg-brand-bg text-slate-900 p-6'>
          Bijuterii
        </Link>
        <Link href='/products' className='bg-brand-bg text-slate-900 p-6'>
          Textile
        </Link>
        <Link href='/products' className='bg-brand-bg text-slate-900 p-6'>
          Altele
        </Link>
      </div>
    </div>
  );
}
