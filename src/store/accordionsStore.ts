import { create } from 'zustand';

type useAccordionsExpandedProps = {
  expanded: string | false;
  setExpanded: (panel: string | false) => void;
};

const useAccordionsExpanded = create<useAccordionsExpandedProps>((set) => ({
  expanded: 'panel1',
  setExpanded: (panel) => set({ expanded: panel }),
}));

export default useAccordionsExpanded;
