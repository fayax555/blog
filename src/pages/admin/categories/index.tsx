import AdminLayout from 'components/AdminLayout'
import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const cagetories = [
  [1, 'Technology'],
  [2, 'Gaming'],
] as const

export default function Categories() {
  return (
    <AdminLayout title='Categories' addBtn>
      <table>
        <thead className='border-b-[1px] text-sm text-slate-600'>
          <tr>
            <th className='py-2 font-light'>ID</th>
            <th className='font-light'>Name</th>
            <th className='font-light'>Action</th>
          </tr>
        </thead>

        <tbody className='translate-y-4 text-slate-700'>
          {cagetories.map(([id, name]) => (
            <tr key={id} className='rounded-md pt-5 hover:bg-slate-100'>
              <td className='rounded-l-md px-10 py-4 font-semibold'>{id}</td>
              <td className='px-20'>{name}</td>
              <td className='rounded-r-md px-10'>
                <div className='flex items-center gap-4'>
                  <button type='button' title='edit article'>
                    <AiFillEdit className='text-xl text-slate-600 transition hover:text-blue-600' />
                  </button>
                  <button type='button' title='delete article'>
                    <AiFillDelete className='text-xl text-slate-600 transition hover:text-red-600' />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}
