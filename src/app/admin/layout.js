import AdminRoute from "@/components/AdminRoute";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <AdminRoute>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row">
        <AdminSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </AdminRoute>
  );
}