import { PaginationProps } from "@/interface/IPagination";
import PageSize from "./PageSize";
import PaginationList from "./PaginationList";

export default function Pagination({ pagination }: PaginationProps) {
  const {
    totalPages,
    currentPage,
    pageSize,
    handlePageChange,
    handlePageOption,
  } = pagination;

  return (
    <div className="pagination-container">
      <PageSize
        pageSize={pageSize}
        totalPages={totalPages}
        handlePageOption={handlePageOption}
      />
      <PaginationList
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        pageSize={pageSize}
      />
    </div>
  );
}
