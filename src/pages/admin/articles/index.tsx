import AdminLayout from 'components/AdminLayout'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

import { t } from 'utils/trpc'

export default function ArticlesPage() {
  // const articles = []
  const { data: articles } = t.article.getAll.useQuery()

  return (
    <AdminLayout title='Articles' addBtn>
      <table>
        <thead className='border-b-[1px] text-sm text-slate-600'>
          <tr>
            <th className='py-2 font-light'>ID</th>
            <th className='font-light'>Title</th>
            <th className='font-light'>Author</th>
            <th className='font-light'>Category</th>
            <th className='font-light'>Status</th>
            <th className='font-light'>Action</th>
          </tr>
        </thead>

        <tbody className='translate-y-4 text-slate-700'>
          {articles?.map(({ id, author, title, category, status }) => (
            <tr className='rounded-md pt-5 hover:bg-slate-100' key={id}>
              <td className='rounded-l-md px-5 py-4 font-semibold'>{id}</td>
              <td className='px-5 py-4 font-semibold'>{title}</td>
              <td className='px-5'>{author}</td>
              <td className='px-5'>{category}</td>
              <td>
                <div
                  title={status}
                  className={`h-3 w-3 rounded-full ${
                    status === 'Published' ? 'bg-teal-400' : 'bg-slate-300'
                  }`}
                ></div>
              </td>
              <td className='rounded-r-md px-5'>
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
