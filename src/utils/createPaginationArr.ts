export default function createPaginationArray(
    currentPage: number,
    totalPages: number
  ): Array<number | string> {
    const pagination: Array<number | string> = [];
  
    // Always include the current page first
    pagination.push(currentPage);
  
    // Add up to 4 pages after the current page
    for (let i = currentPage + 1; i <= Math.min(totalPages, currentPage + 4); i++) {
      pagination.push(i);
    }
  
    // Add ellipsis and last page if necessary
    if ((pagination[pagination.length - 1] as number) < totalPages - 1) {
      pagination.push('...');
      pagination.push(totalPages);
    } else if (pagination[pagination.length - 1] !== totalPages) {
      pagination.push(totalPages);
    }
  
    // Ensure the array has no more than 6 items
    return pagination.slice(0, 12);
  }