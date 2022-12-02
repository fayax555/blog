import { type FormEvent } from 'react'

import AdminLayout from 'components/AdminLayout'
import { t } from 'utils/trpc'
import { AddArticleSchema } from 'schema'

const statuses = [
  { id: 'Draft', name: 'Draft' },
  { id: 'Published', name: 'Published' },
]

type Label = 'Author' | 'Category' | 'Status'
type DropdownItem = { id: number | string; name: string }[] | undefined
type DropdownProps = { items: DropdownItem; label: Label; name: string }
const Dropdown = (d: DropdownProps) => (
  <div className='mb-6 flex items-center gap-4'>
    <label htmlFor={d.label} className='block w-24'>
      {d.label}
    </label>
    <select
      id={d.label}
      name={d.name}
      className='w-[200px] cursor-pointer rounded-md border-r-[12px] bg-slate-200 px-4 py-2 font-semibold'
    >
      {d.items?.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  </div>
)

export default function AddArticlePage() {
  const { data: authors } = t.author.getAll.useQuery()
  const { data: categories } = t.category.getAll.useQuery()

  const addArticle = t.article.add.useMutation({
    onSuccess: () => {
      alert('Article added successfully')
    },
  })

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formDataRaw = new FormData(e.currentTarget)
    const formData = Object.fromEntries(formDataRaw)
    const articleData = AddArticleSchema.parse({
      ...formData,
      categoryId: Number(formData.categoryId),
    })
    addArticle.mutate(articleData)
  }

  return (
    <AdminLayout title='Add Article'>
      <form className='px-5' onSubmit={handleAdd}>
        <Dropdown items={statuses} label='Status' name='status' />
        <Dropdown items={authors} label='Author' name='authorId' />
        <Dropdown items={categories} label='Category' name='categoryId' />

        <label htmlFor='title' className='mb-2 mt-10 block'>
          Title
        </label>
        <input
          type='text'
          id='title'
          name='title'
          className='block w-full rounded-md border-2 border-slate-500 px-4 py-2 text-lg'
        />

        <label htmlFor='content' className='mb-2 mt-8 block'>
          Content
        </label>
        <textarea
          id='content'
          name='content'
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
