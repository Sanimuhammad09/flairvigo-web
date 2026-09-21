import { createFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useCartStore } from '../store/cart'
import { useAuthStore } from '../store/auth'
import { useMutation } from '@tanstack/react-query'
import { supabase } from '../lib/supabase'
import { usePaystackPayment } from 'react-paystack'

export const Route = createFileRoute('/checkout')({
  component: Checkout,
})

function Checkout() {
  const navigate = useNavigate()
  const { items, getCartTotal, clearCart } = useCartStore()
  const { user } = useAuthStore()

  // State for Shipping/Contact
  const [shippingAddress, setShippingAddress] = useState({
    email: user?.email || '',
    country: 'Nigeria',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  })

  // State for Payment Method
  const [paymentMethod, setPaymentMethod] = useState<'PAYSTACK' | 'BANK_TRANSFER'>('PAYSTACK')

  // Calculated Totals
  const subtotal = getCartTotal()
  const tax = subtotal * 0.075 // 7.5% VAT
  const shipping = 1500 // Fixed 1500 NGN
  const total = subtotal + tax + shipping

  // Generate an order number
  const orderNumber = 'FV-' + Date.now().toString(36).toUpperCase()

  // Paystack config
  const paystackConfig = {
    reference: orderNumber,
    email: shippingAddress.email,
    amount: total * 100, // Paystack uses kobo
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_placeholder_key',
  }

  const initializePayment = usePaystackPayment(paystackConfig)

  // Order Creation Mutation
  const createOrderMutation = useMutation({
    mutationFn: async (status: 'PENDING' | 'PAID') => {
      const { data: orderData, error } = await supabase.from('orders').insert({
        order_number: orderNumber,
        user_id: user?.id || null, // Allow guest checkout
        status,
        total_amount: total,
        shipping_address: {
          firstName: shippingAddress.firstName,
          lastName: shippingAddress.lastName,
          address1: shippingAddress.address,
          address2: shippingAddress.apartment,
          city: shippingAddress.city,
          state: shippingAddress.state,
          postalCode: shippingAddress.zip,
          country: shippingAddress.country,
          phone: shippingAddress.phone,
          email: shippingAddress.email
        },
        payment_info: { method: paymentMethod }
      }).select().single()
      if (error) throw error
      
      // Insert order items
      const orderItems = items.map(i => ({
        order_id: orderData.id,
        product_id: i.productId,
        quantity: i.quantity,
        price: i.price,
        size: i.size,
        color: i.color
      }))
      await supabase.from('order_items').insert(orderItems)
      
      return { orderId: orderData.id, orderNumber, paymentMethod }
    },
    onSuccess: (data) => {
      clearCart()
      navigate({ 
        to: '/order-success',
        search: {
          orderId: data.orderId,
          amount: total,
          method: data.paymentMethod
        }
      })
    },
    onError: (err: any) => {
      alert(err.message || 'Error creating order')
    }
  })

  // If cart is empty, redirect to store
  useEffect(() => {
    if (items.length === 0) {
      navigate({ to: '/' })
    }
  }, [items])

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (paymentMethod === 'PAYSTACK') {
      initializePayment({
        onSuccess: () => {
          createOrderMutation.mutate('PAID')
        },
        onClose: () => {
          alert("Payment cancelled. You can try again when you are ready.")
        }
      })
    } else {
      createOrderMutation.mutate('PENDING')
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-body-md antialiased bg-surface-cream text-ink-deep">
      <header className="w-full border-b border-primary/10 bg-surface-cream px-margin-mobile md:px-margin-desktop h-20 flex justify-between items-center max-w-container-max mx-auto shrink-0 sticky top-0 z-50">
        <Link to="/" className="font-display-lg text-headline-lg font-bold text-ink-deep cursor-pointer">
            Flair Vigo
        </Link>
        <Link to="/" className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep hover:text-accent-gold transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          Return to Cart
        </Link>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-gutter lg:gap-[64px]">
          
          {/* Left Column: Forms */}
          <div className="flex-1 w-full lg:max-w-[55%] xl:max-w-[60%] flex flex-col gap-12">
            <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-12">
              
              {/* Contact Information */}
              <section>
                <div className="flex justify-between items-end mb-6">
                  <h2 className="font-headline-md text-headline-md text-ink-deep">Contact Information</h2>
                  {!user && (
                    <Link to="/sign-in" className="font-label-bold text-label-bold text-accent-gold hover:text-ink-deep transition-colors underline underline-offset-4">
                      Already have an account? Log in
                    </Link>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <input 
                    className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                    placeholder="Email address" 
                    type="email" 
                    required
                    value={shippingAddress.email}
                    onChange={e => setShippingAddress({...shippingAddress, email: e.target.value})}
                    disabled={!!user}
                  />
                  {!user && (
                    <p className="text-sm text-on-surface-variant">We'll use this email to send you order updates.</p>
                  )}
                </div>
              </section>

              {/* Shipping Address Section */}
              <section>
                <h2 className="font-headline-md text-headline-md text-ink-deep mb-6">Shipping address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <select 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors appearance-none cursor-pointer focus:border-accent-gold outline-none"
                      value={shippingAddress.country}
                      onChange={e => setShippingAddress({...shippingAddress, country: e.target.value})}
                      required
                    >
                      <option>Nigeria</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                      placeholder="First name" 
                      type="text" 
                      required
                      value={shippingAddress.firstName}
                      onChange={e => setShippingAddress({...shippingAddress, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                      placeholder="Last name" 
                      type="text" 
                      required
                      value={shippingAddress.lastName}
                      onChange={e => setShippingAddress({...shippingAddress, lastName: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <input 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                      placeholder="Address" 
                      type="text" 
                      required
                      value={shippingAddress.address}
                      onChange={e => setShippingAddress({...shippingAddress, address: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <input 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                      placeholder="Apartment, suite, etc. (optional)" 
                      type="text"
                      value={shippingAddress.apartment}
                      onChange={e => setShippingAddress({...shippingAddress, apartment: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                      placeholder="City" 
                      type="text" 
                      required
                      value={shippingAddress.city}
                      onChange={e => setShippingAddress({...shippingAddress, city: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                      placeholder="State" 
                      type="text" 
                      required
                      value={shippingAddress.state}
                      onChange={e => setShippingAddress({...shippingAddress, state: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <input 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                      placeholder="ZIP code / Postal code" 
                      type="text"
                      required
                      value={shippingAddress.zip}
                      onChange={e => setShippingAddress({...shippingAddress, zip: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <input 
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-1 font-body-md text-body-md text-ink-deep rounded-none transition-colors focus:border-accent-gold outline-none" 
                      placeholder="Phone" 
                      type="tel"
                      required
                      value={shippingAddress.phone}
                      onChange={e => setShippingAddress({...shippingAddress, phone: e.target.value})}
                    />
                  </div>
                </div>
              </section>

              {/* Payment Method Section */}
              <section>
                <h2 className="font-headline-md text-headline-md text-ink-deep mb-6">Payment</h2>
                <p className="font-body-md text-body-md text-outline mb-6">All transactions are secure and encrypted.</p>
                
                <div className="border border-outline-variant rounded-lg overflow-hidden bg-surface shadow-sm">
                  <div 
                    className={`p-4 border-b border-outline-variant transition-colors cursor-pointer ${paymentMethod === 'PAYSTACK' ? 'bg-neutral-light' : 'bg-surface-cream hover:bg-neutral-light/50'}`}
                    onClick={() => setPaymentMethod('PAYSTACK')}
                  >
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input 
                        checked={paymentMethod === 'PAYSTACK'} 
                        onChange={() => setPaymentMethod('PAYSTACK')}
                        className="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" 
                        name="payment" 
                        type="radio"
                      />
                      <span className="font-label-bold text-body-md text-ink-deep flex-grow">Paystack (Card, USSD, Bank Transfer)</span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paystack.png/800px-Paystack.png" alt="Paystack" className="h-4 object-contain opacity-70" />
                    </label>
                  </div>
                  
                  <div 
                    className={`p-4 transition-colors cursor-pointer ${paymentMethod === 'BANK_TRANSFER' ? 'bg-neutral-light' : 'bg-surface-cream hover:bg-neutral-light/50'}`}
                    onClick={() => setPaymentMethod('BANK_TRANSFER')}
                  >
                    <label className="flex items-center gap-4 cursor-pointer w-full">
                      <input 
                        checked={paymentMethod === 'BANK_TRANSFER'} 
                        onChange={() => setPaymentMethod('BANK_TRANSFER')}
                        className="w-4 h-4 text-ink-deep focus:ring-accent-gold border-outline-variant" 
                        name="payment" 
                        type="radio"
                      />
                      <span className="font-label-bold text-body-md text-ink-deep">Direct Bank Transfer</span>
                    </label>
                    {paymentMethod === 'BANK_TRANSFER' && (
                      <div className="mt-4 pl-8 text-sm text-on-surface-variant">
                        Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared in our account.
                      </div>
                    )}
                  </div>
                </div>
              </section>

              <div className="pt-6 border-t border-primary/10">
                <button 
                  type="submit" 
                  form="checkout-form"
                  disabled={createOrderMutation.isPending}
                  className="w-full bg-ink-deep text-surface-cream font-label-bold text-body-md py-4 px-8 tracking-wider hover:bg-ink-deep/90 transition-colors block text-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {createOrderMutation.isPending ? 'PROCESSING...' : 'PAY NOW'}
                </button>
                <p className="text-center font-label-sm text-label-sm text-outline mt-4">
                  By clicking Pay Now, you agree to our Terms of Service.
                </p>
              </div>
            </form>
          </div>
          
          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[45%] xl:w-[40%] mt-12 lg:mt-0">
            <div className="bg-neutral-light/50 p-6 md:p-8 rounded-xl sticky top-[100px] border border-primary/10 shadow-sm">
              <h2 className="font-headline-md text-headline-md text-ink-deep mb-6">Order summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-16 h-20 shrink-0 bg-surface-variant rounded-md overflow-hidden border border-ink-deep/10">
                      <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                      <span className="absolute -top-2 -right-2 bg-ink-deep text-surface-cream w-5 h-5 rounded-full flex items-center justify-center font-label-bold text-[10px] z-10 shadow-sm">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-label-bold text-sm text-ink-deep uppercase tracking-wider">{item.name}</h3>
                      <p className="font-body-md text-xs text-on-surface-variant mt-1">{item.color} / {item.size}</p>
                    </div>
                    <span className="font-label-bold text-sm text-ink-deep">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mb-8 pt-6 border-t border-primary/10">
                <input className="flex-grow bg-white border border-outline-variant py-3 px-4 font-body-md text-body-md text-ink-deep rounded transition-colors outline-none focus:border-accent-gold" placeholder="Discount code" type="text"/>
                <button type="button" className="bg-surface-dim text-ink-deep font-label-bold text-sm px-6 py-3 rounded hover:bg-outline-variant transition-colors tracking-widest uppercase">Apply</button>
              </div>

              <div className="space-y-3 pt-6 border-t border-primary/10">
                <div className="flex justify-between font-body-md text-sm text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="font-semibold text-ink-deep">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body-md text-sm text-on-surface-variant">
                  <span>Shipping</span>
                  <span className="font-semibold text-ink-deep">₦{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body-md text-sm text-on-surface-variant">
                  <span>VAT (7.5%)</span>
                  <span className="font-semibold text-ink-deep">₦{tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mt-6 pt-6 border-t border-primary/20">
                <span className="font-headline-md text-lg text-ink-deep">Total</span>
                <div className="text-right flex items-baseline gap-2">
                  <span className="font-label-bold text-on-surface-variant text-xs tracking-widest uppercase">NGN</span>
                  <span className="font-headline-lg text-2xl text-ink-deep">₦{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-ink-deep w-full grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap-md max-w-container-max mx-auto mt-auto text-surface-cream">
        <div className="col-span-2 md:col-span-4 mb-8">
          <span className="font-display-lg text-headline-md">Flair Vigo</span>
        </div>
        <div className="col-span-2 md:col-span-4 mt-8 pt-8 border-t border-surface-cream/10">
          <p className="font-body-md text-sm opacity-70">
            © 2026 Flair Vigo. Premium Medical Apparel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
