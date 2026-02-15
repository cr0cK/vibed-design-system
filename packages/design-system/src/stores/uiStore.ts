import { create } from "zustand";

export interface UIStoreState {
  sidePanelOpen: boolean;
  setSidePanelOpen: (open: boolean) => void;
  toggleSidePanel: () => void;
}

export const useUIStore = create<UIStoreState>((set) => {
  return {
    sidePanelOpen: true,
    setSidePanelOpen: (open: boolean) => set({ sidePanelOpen: open }),
    toggleSidePanel: () =>
      set((state) => {
        return {
          sidePanelOpen: !state.sidePanelOpen
        };
      })
  };
});
