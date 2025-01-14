import { IPaginationList } from "@/interface/IPagination";
import createPaginationArray from "@/utils/createPaginationArr";
import handlePagePagination from "@/utils/handlePagePagination";
import Image from "next/image";

export default function PaginationList({
  currentPage,
  handlePageChange,
  totalPages,
  pageSize,
}: IPaginationList) {
  const page = handlePagePagination(pageSize, totalPages, currentPage);
  const paginateArr = createPaginationArray(currentPage, page.number);

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
        disabled={page.isCurrentPage}
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
