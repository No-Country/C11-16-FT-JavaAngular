export interface DataFormFilter {
  origin?: string;
  destination?: string;
  departure?: string;
  type?: string;
  children?: number;
  adults?: number;
  allowspets?: boolean;
  to?: number;
}

export interface SearchDestination {
  destination: string;
}
