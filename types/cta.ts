export interface CtaButtonProps {
  label?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  href?: string;
}

export interface CtaProps {
  header: string;
  subheader?: string;
  button?: CtaButtonProps;
}
