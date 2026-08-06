import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AdminSidebar } from '../components/AdminSidebar'

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})

function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row selection:bg-accent-gold selection:text-surface-cream">
      <AdminSidebar />
      <Outlet />
    </div>
  )
}
