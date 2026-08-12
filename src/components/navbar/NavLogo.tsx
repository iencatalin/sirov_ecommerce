import Link from 'next/link';

export default function NavLogo() {
  return (
    <Link href='/' className='flex flex-col gap-0'>
      <span className='text-3xl lowercase font-serif font-semibold leading-none'>
        sir<span className='text-brand-accent'>o</span>v
      </span>
      <span className='text-[9px] uppercase font-sans tracking-widest text-brand-muted'>
        cu dragoste · սիրով
      </span>
    </Link>
  );
}
