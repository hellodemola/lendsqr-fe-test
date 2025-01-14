export default function handlePagePagination (
    pageSize: number,
    totalSize: number,
    currentPage: number
  ): { isCurrentPage: boolean; number: number }  {
    const avg = Math.round(totalSize / pageSize);
    return {
      isCurrentPage: currentPage === avg,
      number: avg,
    };
  };