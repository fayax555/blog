import { type ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { AiOutlinePlus } from "react-icons/ai";

const navItems = ["Articles", "Categories", "Authors"];

const Navbar = () => (
  <aside className="mt-24">
    <ul className="grid rounded-md bg-slate-100 p-4 text-lg">
      {navItems.map((item) => (
        <li key={item}>
          <Link
            className="block w-full rounded-md py-2 px-4 hover:bg-slate-200"
            href={`/admin/${item.toLowerCase()}`}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);

const titleSingle: Record<string, string> = { Categories: "Category" };
type Props = { children: ReactNode; title: string; header?: boolean };

export default function AdminLayout({ children, title, header }: Props) {
  return (
    <div className="mx-auto grid max-w-[1000px] grid-cols-[200px_auto] gap-4 p-5">
      <Head>
        <title>Admin - {title}</title>
      </Head>
      <Navbar />
      <main>
        <section className="h-full p-5">
          {header && (
            <header className="flex items-center gap-10">
              <h1 className="px-5 text-3xl font-semibold">{title}</h1>
              <Link
                href={`/admin/${title.toLowerCase()}/add`}
                className="flex items-center gap-2 rounded-md bg-blue-100 px-4 py-2 font-semibold text-blue-900 transition hover:bg-blue-200"
              >
                <AiOutlinePlus />
                <span>{`Add ${titleSingle[title] ?? title.slice(0, -1)}`}</span>
              </Link>
            </header>
          )}
          {children}
        </section>
      </main>
    </div>
  );
}
