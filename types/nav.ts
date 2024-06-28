export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  label?: string;
  description?: string;
  catchyLabel?: string;
  icon?: React.ComponentType<any>;
}
