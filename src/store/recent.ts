import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface RecentItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  viewedAt: number;
}

interface RecentStore {
  items: RecentItem[];
  addItem: (item: Omit<RecentItem, 'viewedAt'>) => void;
  clearItems: () => void;
}

export const useRecentStore = create<RecentStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          // Remove if it already exists to move it to the top
          const filteredItems = state.items.filter((i) => i.id !== item.id);
          
          // Add to beginning and keep only last 10
          const newItems = [
            { ...item, viewedAt: Date.now() },
            ...filteredItems,
          ].slice(0, 10);
          
          return { items: newItems };
        }),
      clearItems: () => set({ items: [] }),
    }),
    {
      name: 'recent-storage', // unique name for localStorage key
    }
  )
)
