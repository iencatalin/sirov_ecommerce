import { heroImages } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='grid md:grid-cols-2 gap-8 main-container min-h-screen items-center justify-center'>
      <div className='flex flex-col'>
        <p className='text-lg uppercase font-sans'>cu dragoste · սիրով</p>
        <h1 className='text-7xl font-serif font-semibold mt-4 max-w-sm'>
          Obiecte făcute cu mâinile, cu sufletul
        </h1>
        <p className='text-sm text-brand-muted/90 leading-5 max-w-sm mt-4'>
          Fiecare piesă este unică — creată de artizani care pun inimă în
          fiecare detaliu.
        </p>
        <div className='flex items-center gap-4 pt-4'>
          <Link
            href='/products'
            className='bg-brand-accent text-slate-50 py-1 px-3 shadow rounded-md cursor-pointer hover:bg-brand-accent/90'
          >
            Descopera colectia
          </Link>
          <Link
            href='/about'
            className='underline underline-offset-8 font-sans font-medium text-brand-text hover:text-brand-accent/90'
          >
            Povestea Noastra
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 '>
        <div className='col-span-2'>
          <Image
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            width={700}
            height={500}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='flex flex-col gap-4'>
          {heroImages.slice(1).map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={300}
              height={240}
              className='w-full flex-1 object-cover'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
