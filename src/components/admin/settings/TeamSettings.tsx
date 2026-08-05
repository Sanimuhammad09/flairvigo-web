export function TeamSettings() {
  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep mb-2">Team & Roles</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Manage your staff accounts, permissions, and roles.</p>
      </div>
      
      <div className="bg-surface-cream border border-primary/10 p-12 rounded-xl flex flex-col items-center justify-center shadow-sm text-center">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">group</span>
        <h3 className="font-headline-md text-headline-md text-ink-deep mb-2">Team Settings Area</h3>
        <p className="text-on-surface-variant max-w-md">The layout for team members and roles goes here. (Awaiting full HTML template).</p>
        
        <button className="mt-8 px-6 py-2 bg-ink-deep text-surface-cream font-label-bold text-label-bold rounded hover:bg-ink-deep/90 transition-colors">
          Add Staff Member
        </button>
      </div>
    </div>
  )
}
