export type NavItemsProps = {
  items: readonly string[];
  activeItem: string;
  onItemClick: (item: string) => void;
  activeClassName?: string;
  inactiveClassName?: string;
  itemClassName?: string;
  renderItem?: (item: string, isActive: boolean) => React.ReactNode;
};

