export interface ColumnConfig {
    field: string;
    header: string;
    sortable?: boolean;
    filterType?: 'text' | 'select' | 'date';
    displayType?: 'text' | 'image' | 'chip' | 'avatar' | 'rating' | 'currency';
    width?: string;
    styleClass?: string;
    chipSeverity?: (item: any) => "success" | "info" | "warn" | "danger" | "secondary" | "contrast" | undefined;
    imageConfig?: {
      baseUrl?: string;
      width?: "normal" | "large" | "xlarge" | undefined;
      height?: string;
      alt?: string;
    };
    currencyCode?: string;
  }
  
  export interface ToolbarConfig {
    showNew?: boolean;
    showDelete?: boolean;
    showImport?: boolean;
    showExport?: boolean;
    newLabel?: string;
    deleteLabel?: string;
    importLabel?: string;
    exportLabel?: string;
    customButtons?: {
      label: string;
      icon?: string;
      severity?: "success" | "info" | "warn" | "danger" | "help" | "primary" | "secondary" | "contrast" | null | undefined;
      onClick: () => void;
    }[];
  }
  
  export interface TableConfig {
    columns: ColumnConfig[];
    toolbar?: ToolbarConfig;
    paginator?: boolean;
    rows?: number;
    globalFilter?: boolean;
    selectionMode?: 'single' | 'multiple';
    showCurrentPageReport?: boolean;
    responsive?: boolean;
    styleClass?: string;
    rowHover?: boolean;
    loading?: boolean;
    scrollable?: boolean;
    scrollHeight?: string;
  }