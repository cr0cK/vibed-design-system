import { create } from "zustand";
import type { ToastTone } from "../molecules/Toast/Toast";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  tone: ToastTone;
  durationMs?: number;
}

export interface ToastStoreState {
  items: ToastItem[];
  pushToast: (item: Omit<ToastItem, "id">) => void;
  dismissToast: (id: string) => void;
  clearToasts: () => void;
}

function createId(): string {
  return `${Date.now()}-${Math.round(Math.random() * 100000)}`;
}

export const useToastStore = create<ToastStoreState>((set) => {
  return {
    items: [],
    pushToast: (item: Omit<ToastItem, "id">) => {
      set(function setToasts(state) {
        return { items: [{ ...item, id: createId() }, ...state.items] };
      });
    },
    dismissToast: (id: string) => {
      set(function setToasts(state) {
        return {
          items: state.items.filter(function filter(item) {
            return item.id !== id;
          })
        };
      });
    },
    clearToasts: () => {
      set({ items: [] });
    }
  };
});
