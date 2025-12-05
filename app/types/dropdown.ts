import {ReactNode} from 'react';

export type DropdownProps = {
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  menuContent: ReactNode;
  minWidth?: string;
};

