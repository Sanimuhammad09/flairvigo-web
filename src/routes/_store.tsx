import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/_store')({
  component: StoreLayout,
})

function StoreLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
