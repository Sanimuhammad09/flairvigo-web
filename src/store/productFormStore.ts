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
  fabricDetails: string
  careInstructions: string
  basePrice: number
  category: string
  collection: string
  variants: ProductVariant[]
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  isDraft: boolean
  images: { url: string, isMain: boolean }[]
  isFeatured: boolean
  isBestSeller: boolean
  
  // Actions
  setField: (field: keyof ProductFormState, value: any) => void
  setProduct: (product: any) => void
  reset: () => void
}

const initialState = {
  id: null,
  name: '',
  description: '',
  fabricDetails: '',
  careInstructions: '',
  basePrice: 0,
  category: 'scrubs',
  collection: '',
  variants: [],
  seoTitle: '',
  seoDescription: '',
  seoKeywords: '',
  isDraft: false,
  images: [],
  isFeatured: false,
  isBestSeller: false,
}

export const useProductFormStore = create<ProductFormState>((set) => ({
  ...initialState,
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  setProduct: (product) => set({
    id: product.id,
    name: product.name || '',
    description: product.description || '',
    fabricDetails: product.fabricDetails || '',
    careInstructions: product.careInstructions || '',
    basePrice: product.basePrice || product.price || 0,
    category: product.category?.id || product.category || 'scrubs',
    collection: product.collection?.id || product.collectionId || '',
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
    images: product.images?.map((img: any) => ({ url: img.url, isMain: img.isMain })) || [],
    isFeatured: product.isFeatured || false,
    isBestSeller: product.isBestSeller || false,
  }),
  reset: () => set(initialState)
}))
