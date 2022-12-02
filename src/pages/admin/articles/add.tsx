import AdminLayout from 'components/AdminLayout'
import { articles } from 'data'

const authors = [...new Set(articles.map((a) => a.author))]
const categories = [...new Set(articles.map((a) => a.category))]
const statuses = ['Draft', 'Published']

type Label = 'Author' | 'Category' | 'Status'
type DropdownProps = { items: string[]; label: Label }
const Dropdown = ({ items, label }: DropdownProps) => (
  <div className='mb-6 flex items-center gap-4'>
    <label htmlFor={label} className='block w-24'>
      {label}
    </label>
    <select
      id={label}
      className='w-[200px] cursor-pointer rounded-md border-r-[12px] bg-slate-200 px-4 py-2 font-semibold'
    >
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
)

export default function AddArticlePage() {
  return (
    <AdminLayout title='Add Article'>
      <form className='px-5'>
        <Dropdown items={statuses} label='Status' />
        <Dropdown items={authors} label='Author' />
        <Dropdown items={categories} label='Category' />

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
