'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

import { Form } from '../atoms/Form'
import { Label } from '../atoms/Label'
import { TextField } from '../atoms/TextField'
import { Button } from '../atoms/Button'
import { sendFeedback } from '@/services/feedback'
import { FeedbackPayload } from '@/app/api/feedback/route'

export function About() {
  const [isPending, startTransition] = useTransition()
  const [isError, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const payload: FeedbackPayload = {
      name: formData.get('name') as string,
      subject: formData.get('subject') as string,
      comments: formData.get('comments') as string,
    }
    startTransition(() => {
      setError(false)
      sendFeedback(payload)
        .then(() => {
          router.push('/')
        })
        .catch(() => {
          setError(true)
          console.error('failed')
        })
    })
  }

  return (
    <Form name='about' className='mt-10 w-full max-w-2xl mx-auto flex flex-col items-center p-6 bg-gray-50 shadow-lg rounded-lg' onSubmit={handleSubmit}>
      <span className='text-3xl font-bold text-gray-700 mb-6'>About</span>
      <Label className='w-full mb-4'>
        <span className='block text-lg font-semibold text-gray-600 mb-2'>Nombre</span>
        <TextField name='name' as='text' required className='p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
      </Label>
      <Label className='w-full mb-4'>
        <span className='block text-lg font-semibold text-gray-600 mb-2'>Tema</span>
        <TextField name='subject' as='text' required className='p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
      </Label>
      <Label htmlFor='comments' className='w-full mb-4'>
        <span className='block text-lg font-semibold text-gray-600 mb-2'>Comentarios</span>
        <TextField
          as='textarea'
          name='comments'
          id='comments'
          placeholder='Pon tus comentarios'
          className='p-3 border border-gray-300 rounded w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </Label>
      <Button type='submit' disabled={isPending} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'>
        Submit
      </Button>
      {isError ? <p className='text-red-500 mt-4'>Something went wrong. Please try again.</p> : null}
    </Form>
  )
}
