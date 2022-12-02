import { type ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AiOutlinePlus } from 'react-icons/ai'

const navItems = ['Articles', 'Categories', 'Authors'] as const

const Navbar = () => {
  const { pathname } = useRouter()
  const active = pathname.split('/')[2]

  return (
    <aside className='mt-24'>
      <ul className='grid rounded-md bg-slate-100 p-4 text-lg'>
        {navItems.map((item) => (
          <li key={item}>
            <Link
              className={`${
                active === item.toLowerCase()
                  ? 'bg-slate-300'
                  : 'hover:bg-slate-200'
              } block w-full rounded-md py-2 px-4 `}
              href={`/admin/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

const titleSingle: Record<string, string> = { Categories: 'Category' }
type Props = { children: ReactNode; title: string; addBtn?: boolean }

export default function AdminLayout({ children, title, addBtn }: Props) {
  return (
    <div className='mx-auto grid max-w-[1050px] grid-cols-[200px_auto] gap-4 p-5'>
      <Head>
        <title>{`Admin ${title}`}</title>
      </Head>
      <Navbar />
      <main>
        <section className='mb-40 h-full p-5'>
          <header className='mb-10 flex items-center gap-10'>
            <h1 className='px-5 text-3xl font-semibold text-slate-800'>
              {title}
            </h1>
            {addBtn && (
              <Link
                href={`/admin/${title.toLowerCase()}/add`}
                className='flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 font-semibold text-slate-100 transition hover:bg-slate-600'
              >
                <AiOutlinePlus className='text-xl' />
                <span>{`Add ${titleSingle[title] ?? title.slice(0, -1)}`}</span>
              </Link>
            )}
          </header>
          {children}
        </section>
      </main>
    </div>
  )
}
