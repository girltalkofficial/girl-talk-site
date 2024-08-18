'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto p-4">
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base sm:text-lg md:text-xl font-Futura font-medium text-black'
        >
          Full Name 
        </label>
        <input
          type='text'
          placeholder='Last, First'
          className='w-full font-Futura rounded-md border border-gray-300 bg-white py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-medium text-gray-700 outline-none focus:border-black focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base sm:text-lg md:text-xl font-Futura font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border font-Futura border-gray-300 bg-white py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-medium text-gray-700 outline-none focus:border-black focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base sm:text-lg md:text-xl font-Futura font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none font-Futura rounded-md border border-gray-300 bg-white py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-medium text-gray-700 outline-none focus:border-black focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className="text-center">
        <button className='hover:shadow-sm font-Futura rounded-md bg-pink-400 py-3 px-6 sm:px-8 text-base sm:text-lg md:text-xl hover:scale-110 text-white outline-none transition-transform duration-150'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
