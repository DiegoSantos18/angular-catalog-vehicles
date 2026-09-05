export interface NavItem {
  readonly label: string;
  readonly route?: string;
  readonly icon?: string;
  readonly children?: readonly NavItem[];
}
