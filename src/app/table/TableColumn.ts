export interface TableColumn {
  name: string;
  field: string;
  position?: 'right' | 'left';
  isSortable?: boolean;
}
