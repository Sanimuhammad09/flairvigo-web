import { createFileRoute } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/api'
import { useState } from 'react'

export const Route = createFileRoute('/admin/customers')({
  component: AdminCustomers,
})

function AdminCustomers() {
  const queryClient = useQueryClient()
  const { data: users, isLoading } = useQuery({
    queryKey: ['admin', 'users'],
    queryFn: async () => {
      try {
        const res = await api.get('/admin/customers')
        return res.data.data || res.data || []
      } catch (err) {
        return []
      }
    }
  })

  // State for Modals
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [editForm, setEditForm] = useState({ firstName: '', lastName: '', email: '', isActive: true })

  // Mutations
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/admin/customers/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'users'] })
      setIsDeleteModalOpen(false)
      setSelectedUser(null)
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Failed to delete customer.')
    }
  })

  const editMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string, data: any }) => {
      await api.put(`/admin/customers/${id}`, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'users'] })
      setIsEditModalOpen(false)
      setSelectedUser(null)
    }
  })

  const handleEditClick = (user: any) => {
    setSelectedUser(user)
    setEditForm({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      isActive: user.isActive ?? true
    })
    setIsEditModalOpen(true)
  }

  const handleDeleteClick = (user: any) => {
    setSelectedUser(user)
    setIsDeleteModalOpen(true)
  }

  const totalCustomers = users?.length || 0;
  const activeCustomers = users?.filter((u: any) => u.isActive)?.length || 0;

  return (
    <main className="flex-grow p-gutter md:p-margin-desktop max-w-container-max mx-auto w-full relative">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-section-gap-md gap-4">
        <div>
          <h2 className="font-display-lg text-display-lg text-ink-deep mb-2">Customers</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Manage relationships and view purchase histories.</p>
        </div>
        <div className="relative w-full md:w-auto">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
          <input className="w-full md:w-80 pl-12 pr-4 py-3 bg-transparent border-b border-ink-deep/10 focus:border-accent-gold focus:outline-none transition-colors font-body-md text-body-md text-ink-deep placeholder-on-surface-variant" placeholder="Search customers..." type="text" />
        </div>
      </header>
      
      {/* Metrics Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-gap-md">
        <div className="bg-neutral-light p-gutter border border-ink-deep/5 flex flex-col justify-between h-40">
          <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Total Customers</p>
          <p className="font-display-lg text-display-lg text-ink-deep">{isLoading ? '...' : totalCustomers.toLocaleString()}</p>
        </div>
        <div className="bg-neutral-light p-gutter border border-ink-deep/5 flex flex-col justify-between h-40">
          <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Active This Month</p>
          <p className="font-display-lg text-display-lg text-ink-deep">{isLoading ? '...' : activeCustomers.toLocaleString()}</p>
        </div>
        <div className="bg-neutral-light p-gutter border border-ink-deep/5 flex flex-col justify-between h-40">
          <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Avg. Lifetime Value</p>
          <p className="font-display-lg text-display-lg text-accent-gold">₦0</p>
        </div>
      </div>
      
      {/* Customer List Table */}
      <div className="w-full overflow-x-auto pb-8 min-h-[400px]">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-ink-deep/10">
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Customer</th>
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Role</th>
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Joined</th>
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-ink-deep divide-y divide-ink-deep/5">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-on-surface-variant">Loading customers...</td>
              </tr>
            ) : users?.length > 0 ? (
              users.map((user: any) => (
                <tr key={user.id} className="hover:bg-neutral-light transition-colors group">
                  <td className="py-4 px-2 flex items-center gap-4">
                    <div className="w-10 h-10 bg-ink-deep rounded-full flex items-center justify-center text-surface-cream font-label-bold text-label-bold">
                      {(user.firstName?.[0] || 'U') + (user.lastName?.[0] || '')}
                    </div>
                    <div>
                      <p className="font-label-bold text-label-bold">{user.firstName || 'Unknown'} {user.lastName || ''}</p>
                      <p className="text-on-surface-variant text-sm">{user.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <span className="inline-flex items-center px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs font-label-bold rounded-full">{user.role || 'USER'}</span>
                  </td>
                  <td className="py-4 px-2">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-label-bold rounded-full ${user.isActive ? 'bg-green-100 text-green-800' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-on-surface-variant">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="py-4 px-2 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                      <button onClick={() => handleEditClick(user)} className="text-ink-deep hover:text-accent-gold transition-colors font-label-bold uppercase text-xs tracking-widest border-b border-ink-deep hover:border-accent-gold">
                        Edit
                      </button>
                      <button onClick={() => handleDeleteClick(user)} className="text-error hover:text-red-700 transition-colors font-label-bold uppercase text-xs tracking-widest border-b border-error hover:border-red-700">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center text-on-surface-variant">No customers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Placeholder */}
      <div className="flex justify-end gap-2 mt-4">
        <button className="p-2 text-on-surface-variant hover:text-ink-deep transition-colors">
          <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
        </button>
        <button className="p-2 text-ink-deep font-label-bold border-b-2 border-accent-gold">1</button>
        <button className="p-2 text-on-surface-variant hover:text-ink-deep transition-colors font-label-bold">2</button>
        <button className="p-2 text-on-surface-variant hover:text-ink-deep transition-colors font-label-bold">3</button>
        <button className="p-2 text-on-surface-variant hover:text-ink-deep transition-colors">
          <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
        </button>
      </div>

      {/* Edit Customer Modal */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-surface-cream rounded-xl shadow-2xl p-8 max-w-lg w-full">
            <h3 className="font-headline-lg text-2xl text-ink-deep mb-6">Edit Customer</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              editMutation.mutate({ id: selectedUser.id, data: editForm })
            }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-bold text-sm text-ink-deep mb-2">First Name</label>
                  <input 
                    type="text" 
                    value={editForm.firstName}
                    onChange={e => setEditForm({...editForm, firstName: e.target.value})}
                    className="w-full border border-ink-deep/20 rounded p-3 focus:outline-none focus:border-accent-gold" 
                    required
                  />
                </div>
                <div>
                  <label className="block font-label-bold text-sm text-ink-deep mb-2">Last Name</label>
                  <input 
                    type="text" 
                    value={editForm.lastName}
                    onChange={e => setEditForm({...editForm, lastName: e.target.value})}
                    className="w-full border border-ink-deep/20 rounded p-3 focus:outline-none focus:border-accent-gold" 
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-bold text-sm text-ink-deep mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={editForm.email}
                  onChange={e => setEditForm({...editForm, email: e.target.value})}
                  className="w-full border border-ink-deep/20 rounded p-3 focus:outline-none focus:border-accent-gold" 
                  required
                />
              </div>
              <div className="flex items-center gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="isActive"
                  checked={editForm.isActive}
                  onChange={e => setEditForm({...editForm, isActive: e.target.checked})}
                  className="w-5 h-5 accent-ink-deep cursor-pointer"
                />
                <label htmlFor="isActive" className="font-label-bold text-sm text-ink-deep cursor-pointer">Active Account</label>
              </div>
              <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-ink-deep/10">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-6 py-2 border border-ink-deep/20 rounded font-label-bold text-ink-deep hover:bg-neutral-light transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={editMutation.isPending} className="px-6 py-2 bg-ink-deep text-surface-cream rounded font-label-bold hover:bg-ink-deep/90 transition-colors">
                  {editMutation.isPending ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Customer Modal */}
      {isDeleteModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-surface-cream rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
            <span className="material-symbols-outlined text-6xl text-error mb-4">warning</span>
            <h3 className="font-headline-lg text-2xl text-ink-deep mb-2">Delete Customer?</h3>
            <p className="font-body-md text-on-surface-variant mb-8">
              Are you sure you want to delete <strong>{selectedUser.firstName} {selectedUser.lastName}</strong>? This action will permanently remove their account.
              <br/><br/>
              <span className="text-xs italic text-error">Note: You cannot delete a customer if they have existing orders.</span>
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-6 py-3 border border-ink-deep/20 rounded font-label-bold text-ink-deep hover:bg-neutral-light transition-colors">
                Cancel
              </button>
              <button onClick={() => deleteMutation.mutate(selectedUser.id)} disabled={deleteMutation.isPending} className="px-6 py-3 bg-error text-surface-cream rounded font-label-bold hover:bg-red-700 transition-colors shadow-lg">
                {deleteMutation.isPending ? 'Deleting...' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
