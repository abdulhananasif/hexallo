export type MainNavProps = {
  items: readonly string[];
  activeItem: string;
  onItemClick: (item: string) => void;
};

