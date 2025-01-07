
type TSelect = (e: React.ChangeEvent<HTMLSelectElement>) => void;

export interface IPaginationList {
  totalPages: number;
  currentPage: number;
  pageSize: number;
  handlePageChange: (p: number) => void;
}

export interface IPagination extends IPaginationList {
  handlePageOption: TSelect;
}

export interface IPageSize extends Pick<IPaginationList, 'totalPages' | 'pageSize'> {
  handlePageOption: TSelect;
}

export interface PaginationProps {
  pagination: IPagination;
}