import { create } from "zustand";

export type NotificationTone = "neutral" | "success" | "danger";

export interface NotificationItem {
  id: string;
  title: string;
  body?: string;
  tone: NotificationTone;
}

export interface NotificationsStoreState {
  items: NotificationItem[];
  pushNotification: (item: Omit<NotificationItem, "id">) => void;
  dismissNotification: (id: string) => void;
  clearNotifications: () => void;
}

function createId(): string {
  return `${Date.now()}-${Math.round(Math.random() * 100000)}`;
}

export const useNotificationsStore = create<NotificationsStoreState>((set) => {
  return {
    items: [],
    pushNotification: (item: Omit<NotificationItem, "id">) => {
      set((state) => {
        return {
          items: [{ ...item, id: createId() }, ...state.items]
        };
      });
    },
    dismissNotification: (id: string) => {
      set((state) => {
        return {
          items: state.items.filter((item) => item.id !== id)
        };
      });
    },
    clearNotifications: () => {
      set({ items: [] });
    }
  };
});
