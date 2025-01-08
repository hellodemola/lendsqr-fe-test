import { IPageSize } from "@/interface/IPagination";

const displayDataNum = [10, 20, 30, 40, 50];

export default function PageSize({
  pageSize,
  totalPages,
  handlePageOption,
}: IPageSize) {
  return (
    <div>
      Showing{" "}
      <select
        value={pageSize}
        name="pageSizes"
        onChange={handlePageOption}
        className="paginate-select"
      >
        {displayDataNum.map((size: number, index: number) => (
          <option key={index} disabled={size === pageSize} value={size}>
            {size}
          </option>
        ))}
      </select>{" "}
      out of {totalPages}
    </div>
  );
}
