import AdminLayout from "components/AdminLayout";

export default function AdminPage() {
  return (
    <AdminLayout title="Home">
      <div className="h-full bg-slate-200 p-4">
        <h1 className="text-2xl">Welcome Admin</h1>
      </div>
    </AdminLayout>
  );
}
