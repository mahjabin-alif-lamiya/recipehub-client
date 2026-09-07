import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row">
        <DashboardSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </ProtectedRoute>
  );
}