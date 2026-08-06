import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'
import { generateInvoicePDF } from '../utils/generateInvoice'

export const Route = createFileRoute('/order-success')({
  component: OrderSuccess,
})

function OrderSuccess() {
  const [params, setParams] = useState<any>({})

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    setParams({
      orderId: searchParams.get('orderId'),
      amount: searchParams.get('amount'),
      method: searchParams.get('method'),
      bankName: searchParams.get('bankName'),
      accountName: searchParams.get('accountName'),
      accountNumber: searchParams.get('accountNumber')
    })
  }, [])

  const { data: order } = useQuery({
    queryKey: ['order', params.orderId],
    queryFn: async () => {
      if (!params.orderId) return null
      const res = await api.get('/orders')
      const orders = res.data?.data || res.data || []
      return orders.find((o: any) => o.id === params.orderId)
    },
    enabled: !!params.orderId
  })

  return (
    <div className="min-h-screen flex flex-col font-body-md antialiased bg-surface-cream text-ink-deep">
      <header className="w-full border-b border-primary/10 bg-surface-cream px-margin-mobile md:px-margin-desktop h-20 flex justify-between items-center max-w-container-max mx-auto shrink-0 sticky top-0 z-50">
        <Link to="/" className="font-display-lg text-headline-md font-bold text-ink-deep cursor-pointer">
          Flair Vigo
        </Link>
        <Link to="/" className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep hover:text-accent-gold transition-colors flex items-center gap-2">
          Continue Shopping
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
        </Link>
      </header>

      <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 text-center">
        <div className="mb-12">
          <span className="material-symbols-outlined text-[64px] text-accent-gold mb-4">check_circle</span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep font-bold mb-4">Order Confirmed</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto mb-6">
            Thank you for your purchase! We've received your order {params.orderId ? `(#${params.orderId.substring(0, 8).toUpperCase()})` : ''} and will email you with tracking details as soon as it ships.
          </p>
          
          <button 
            onClick={() => order ? generateInvoicePDF(order) : alert('Order details are still loading. Please try again in a moment.')} 
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ink-deep text-ink-deep font-label-bold tracking-wider hover:bg-neutral-light transition-colors rounded"
          >
            <span className="material-symbols-outlined">download</span>
            DOWNLOAD INVOICE
          </button>
        </div>

        {params.method === 'BANK_TRANSFER' && (
          <div className="bg-surface-cream border-2 border-accent-gold/40 rounded-xl p-8 text-left mb-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent-gold"></div>
            <h2 className="font-headline-md text-2xl text-ink-deep mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent-gold">account_balance</span>
              Bank Transfer Instructions
            </h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Please transfer the total amount of <strong>₦{Number(params.amount).toLocaleString()}</strong> to the following bank account to complete your order. Your order will remain pending until funds are confirmed.
            </p>
            
            <div className="bg-neutral-light/50 p-6 rounded-lg space-y-4 font-body-md">
              <div className="flex justify-between items-center border-b border-ink-deep/5 pb-4">
                <span className="text-on-surface-variant">Bank Name</span>
                <span className="font-label-bold text-ink-deep">{params.bankName || 'Guaranty Trust Bank'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-ink-deep/5 pb-4">
                <span className="text-on-surface-variant">Account Name</span>
                <span className="font-label-bold text-ink-deep">{params.accountName || 'Flair Vigo'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-ink-deep/5 pb-4">
                <span className="text-on-surface-variant">Account Number</span>
                <span className="font-label-bold text-ink-deep text-lg tracking-widest">{params.accountNumber || '0123456789'}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-on-surface-variant">Amount to Transfer</span>
                <span className="font-headline-md text-accent-gold text-2xl">₦{Number(params.amount).toLocaleString()}</span>
              </div>
            </div>
            
            <p className="text-xs text-on-surface-variant mt-6 italic text-center">
              * Please use your Order ID (#{params.orderId?.substring(0, 8).toUpperCase()}) as the payment reference.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="w-full sm:w-auto inline-block bg-ink-deep text-surface-cream font-label-bold text-body-md py-4 px-8 tracking-wider hover:bg-ink-deep/90 transition-colors shadow-md rounded flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">shopping_bag</span>
            CONTINUE SHOPPING
          </Link>
          <button onClick={() => {
            import('../store/auth').then(({ useAuthStore }) => {
              useAuthStore.getState().logout()
              window.location.href = '/'
            })
          }} className="w-full sm:w-auto inline-block bg-surface-cream border-2 border-transparent text-on-surface-variant hover:text-ink-deep font-label-bold text-body-md py-4 px-8 tracking-wider transition-colors rounded flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">logout</span>
            SIGN OUT
          </button>
        </div>
      </main>

      <footer className="bg-ink-deep w-full relative grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap-md max-w-container-max mx-auto mt-auto text-surface-cream">
        <div className="col-span-2 md:col-span-4 mb-8">
          <span className="font-display-lg text-headline-md">Flair Vigo</span>
        </div>
        <div className="col-span-2 md:col-span-4 pt-8 border-t border-surface-cream/10">
          <p className="font-body-md text-sm opacity-70">
            © 2026 Flair Vigo. Premium Medical Apparel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
