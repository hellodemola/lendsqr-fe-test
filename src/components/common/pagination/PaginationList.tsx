import { IPaginationList } from "@/interface/IPagination";
import createPaginationArray from "@/utils/createPaginationArr";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PaginationList({
  currentPage,
  handlePageChange,
  totalPages,
  pageSize,
}: IPaginationList) {
  const [pageNumbers, setPageNumbers] = useState<number>(0);
  const paginateArr = createPaginationArray(currentPage, pageNumbers);

  useEffect(() => {
    const avg = totalPages / pageSize;
    setPageNumbers(Math.round(avg));
  }, [pageSize, totalPages]);

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-arrow-button"
      >
        <Image
          width={15}
          height={15}
          alt="previous button"
          src="/icons/angle-left.svg"
        />
      </button>
      {paginateArr.map((item, index) =>
        typeof item === "number" ? (
          <button
            key={index}
            onClick={() => handlePageChange(item)}
            className={`pagination-button ${
              item === currentPage && "active-page-button"
            }`}
          >
            {item}
          </button>
        ) : (
          <span key={index} style={{ margin: "0 5px" }}>
            {item}
          </span>
        )
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageNumbers}
        className=" pagination-arrow-button"
      >
        <Image
          width={15}
          height={15}
          alt="foward button"
          src="/icons/angle-right.svg"
        />
      </button>
    </div>
  );
}
