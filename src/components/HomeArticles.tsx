import React from 'react'
import { t } from 'utils/trpc'

export default function HomeArticles() {
  const { data: articles } = t.article.getAll.useQuery()

  if (!articles) return null

  return (
    <section className='mt-20 grid grid-cols-2 gap-5'>
      {articles.map((a) => (
        <article key={a.id} className='rounded-md bg-slate-100 p-4'>
          <span className='rounded-full bg-slate-300 px-4 py-1 text-xs text-slate-800'>
            {a.category}
          </span>
          <div className='py-4'>
            <h2 className='text-lg font-semibold'>{a.title}</h2>
            <p className='text-sm text-slate-700'>
              by <span className='font-semibold'>{a.author}</span>
            </p>
          </div>
          <p>{a.content}</p>
        </article>
      ))}
    </section>
  )
}
