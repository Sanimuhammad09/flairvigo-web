import { create } from 'zustand'

export interface ProductVariant {
  id?: string
  color: string
  size: string
  sku: string
  priceAdjustment: number
  inventory: number
}

export interface ProductFormState {
  id: string | null
  name: string
  description: string
  basePrice: number
  category: string
  variants: ProductVariant[]
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  isDraft: boolean
  
  // Actions
  setField: (field: keyof ProductFormState, value: any) => void
  setProduct: (product: any) => void
  reset: () => void
}

const initialState = {
  id: null,
  name: '',
  description: '',
  basePrice: 0,
  category: 'scrubs',
  variants: [],
  seoTitle: '',
  seoDescription: '',
  seoKeywords: '',
  isDraft: false,
}

export const useProductFormStore = create<ProductFormState>((set) => ({
  ...initialState,
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  setProduct: (product) => set({
    id: product.id,
    name: product.name || '',
    description: product.description || '',
    basePrice: product.basePrice || product.price || 0,
    category: product.category?.id || product.category || 'scrubs',
    variants: product.variants?.map((v: any) => ({
      id: v.id,
      color: v.color || '',
      size: v.size || '',
      sku: v.sku || '',
      priceAdjustment: v.priceAdjustment || 0,
      inventory: v.inventory || v.stockQuantity || 0
    })) || [],
    seoTitle: product.seoTitle || '',
    seoDescription: product.seoDescription || '',
    seoKeywords: product.seoKeywords || '',
    isDraft: product.isDraft || false,
  }),
  reset: () => set(initialState)
}))
