import React, { useCallback, useState } from 'react';
import Input from '@/components/Input';
import { Auth } from '@/config';

export default function auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState(Auth.LOGIN);

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === Auth.LOGIN ? Auth.REGISTER : Auth.LOGIN);
  }, []);

  const toggleTitle = () => variant === Auth.LOGIN ? 'Sign in' : 'Register';
  const toggleButtonText = () => variant === Auth.LOGIN ? 'Login' : 'Sign up';

  return (
    <div className='relative h-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className='w-full h-full backdrop-blur-[2px]'>
        <nav className='px-12 py-5'>
          <img src="/images/logo.png" alt="Logo" className='h-24' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold '>
              {toggleTitle()}
            </h2>
            <div className='flex flex-col gap-4'>
              {
                variant === Auth.REGISTER && (
                  <Input
                    label='Username'
                    onChange={(e:any) => setName(e.target.value)}
                    id='name'
                    value={name}
                  />
                )
              }
              <Input
                label='Email'
                onChange={(e:any) => setEmail(e.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(e:any) => setPassword(e.target.value)}
                id='password'
                type='password'
                value={password}
              />
            </div>
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {toggleButtonText()}
            </button>
            <p className='text-neutral-500 mt-12'>
              {
                variant === Auth.LOGIN ? 'First time using Netflix?' : 'Already have an account?'
              }
              <span
                onClick={toggleVariant}
                className='text-white ml-1 hover:underline cursor-pointer'
              >
                {
                  variant === Auth.LOGIN ? 'Create an account' : 'Login'
                }
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
