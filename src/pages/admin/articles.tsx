import AdminLayout from "components/AdminLayout";

const articles = [
  {
    id: 1,
    title: "The complete guide to CSS media queries",
    author: "James Cooper",
    category: "Technology",
  },
  {
    id: 2,
    title: "Learn Typescript in 5 minutes",
    author: "Ali Adam",
    category: "Technology",
  },
  {
    id: 3,
    title: "State management with React Hooks",
    author: "Ali Adam",
    category: "Technology",
  },
  {
    id: 4,
    category: "Gaming",
    title: "How to win at Fortnite",
    author: "James Cooper",
  },
];

export default function ArticlesPage() {
  return (
    <AdminLayout title="Articles">
      <table className="mt-10">
        <thead className="border-b-2 text-sm text-slate-600">
          <tr>
            <th className="py-2 font-light">Title</th>
            <th className="font-light">Author</th>
            <th className="font-light">Category</th>
          </tr>
        </thead>
        <tbody className="translate-y-4">
          {articles.map(({ id, author, title, category }) => (
            <tr className="rounded-md pt-5 hover:bg-slate-100" key={id}>
              <td className="rounded-l-md px-5 py-3 font-semibold">{title}</td>
              <td className="px-5">{author}</td>
              <td className="rounded-r-md px-5">{category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
