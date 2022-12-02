import AdminLayout from 'components/AdminLayout'
import { articles } from 'data'

const authors = [...new Set(articles.map((a) => a.author))]
const categories = [...new Set(articles.map((a) => a.category))]

export default function AddArticlePage() {
  return (
    <AdminLayout title='Add Article'>
      <form className='px-5'>
        <div className='mb-6 flex items-center gap-4'>
          <label htmlFor='status' className='block w-24'>
            Status
          </label>
          <select
            id='status'
            className='w-[200px] cursor-pointer rounded-md border-r-[12px] bg-slate-200 px-4 py-2 font-semibold'
          >
            {['Draft', 'Published'].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-6 flex items-center gap-4'>
          <label htmlFor='author' className='block w-24'>
            Author
          </label>
          <select
            id='author'
            className='w-[200px] cursor-pointer rounded-md border-r-[12px] bg-slate-200 px-4 py-2 font-semibold'
          >
            {authors.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-6 flex items-center gap-4'>
          <label htmlFor='category' className='block w-24'>
            Category
          </label>
          <select
            id='category'
            className='w-[200px] cursor-pointer rounded-md border-r-[12px] bg-slate-200 px-4 py-2 font-semibold'
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <label htmlFor='title' className='mb-2 mt-10 block'>
          Title
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-md border-2 border-slate-500 px-4 py-2 text-lg'
        />

        <label htmlFor='body' className='mb-2 mt-8 block'>
          Body
        </label>
        <textarea
          id='body'
          className='block min-h-[300px] w-full rounded-md border-2 border-slate-500 p-4 text-lg'
        ></textarea>

        <button
          type='submit'
          className='mt-8 block w-[200px] rounded-md bg-slate-800 px-4 py-2 text-lg font-semibold text-slate-200 transition hover:bg-slate-600'
        >
          Add Article
        </button>
      </form>
    </AdminLayout>
  )
}
