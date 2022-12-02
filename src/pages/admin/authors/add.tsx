import AdminLayout from 'components/AdminLayout'
import React from 'react'

export default function AddAuthorPage() {
  return (
    <AdminLayout title='Add Category'>
      <form className='px-5'>
        <label htmlFor='title' className='mb-2 mt-10 block'>
          Author Name
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-md border-2 border-slate-500 px-4 py-2 text-lg'
        />

        <button
          type='submit'
          className='mt-8 block w-[200px] rounded-md bg-slate-800 px-4 py-2 text-lg font-semibold text-slate-200 transition hover:bg-slate-600'
        >
          Add Author
        </button>
      </form>
    </AdminLayout>
  )
}
