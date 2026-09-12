export interface VFilter {
  schema: {
    showSearch?: boolean;
    searchLabel?: string;
    ranges?: {
      key: string;
      labelMin: string;
      labelMax: string;
    }[];
    multiSelects?: {
      key: string;
      title: string;
      options: string[];
    }[];
  };

  result: {
    search: string;
    ranges: Record<string, { min: number | null; max: number | null }>;
    multiSelects: Record<string, string[]>;
  };
}
