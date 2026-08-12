'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { authClient } from '@/lib/auth-client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useEffect } from 'react';

const signInSchema = z.object({
  email: z.email('Email invalid'),
  password: z.string().min(8, 'Parola trebuie să aibă minim 8 caractere'),
});

type SignInForm = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const router = useRouter();
  useEffect(() => {
    authClient.getSession().then((session) => {
      if (session.data != null) router.push('/');
    });
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  async function handleSignIn(data: SignInForm) {
    await authClient.signIn.email(
      { ...data, callbackURL: '/' },
      {
        onSuccess: () => {
          router.push('/');
        },
        onError: (error) => {
          toast.error(error.error.message || 'Eroare la crearea contului');
        },
      },
    );
  }

  return (
    <div className='mt-8 outline-gray-800 outline-1 mx-auto w-full max-w-md'>
      <div className='px-4 py-8'>
        <div className='text-center space-y-1'>
          <h3 className='font-medium text-xl'>
            sir<span className='text-brand-accent'>o</span>v
          </h3>
          <p>cu dragoste · սիրով</p>
        </div>
        <div className='py-8 space-y-1'>
          <h1 className='text-lg font-semibold text-brand-text'>
            Creează-ți contul
          </h1>
          <p className='text-sm text-brand-muted'>
            Alătură-te comunității noastre
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)} className='space-y-6 mb-3'>
          <Input
            type='email'
            id='email'
            label='Email'
            disabled={isSubmitting}
            error={errors.email?.message}
            registration={register('email')}
          />
          <Input
            type='password'
            id='password'
            label='Password'
            disabled={isSubmitting}
            error={errors.password?.message}
            registration={register('password')}
          />
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Conecteaza-te...' : 'Conecteaza-te'}
          </Button>
        </form>
      </div>
    </div>
  );
}
