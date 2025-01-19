import { UserDispatchContext } from "@/hooks/context/useUser.context";
import { useContext } from "react";
import { UserTable } from "../tables";
import Pagination from "../common/pagination";
import { IIntialState } from "@/interface/IUserReducer";
import IUserResp from "@/interface/IUser";
import { IPagination } from "@/interface/IPagination";

export default function TableContainer({ data }: { data: IIntialState }) {
  const { stateStatus, users, currentPage, rowNumber, filteredUsers } = data;
  const actions = useContext(UserDispatchContext);

  const sliceData = (type: Array<IUserResp>) =>
    type.slice((currentPage - 1) * rowNumber, currentPage * rowNumber);

  const isFilter =
    stateStatus?.isFilter && filteredUsers && typeof filteredUsers !== null;

  const currentPageData = sliceData(isFilter ? filteredUsers : users);

  const totalPages = isFilter ? filteredUsers?.length : users.length;

  const handlePageOption = (e: React.ChangeEvent<HTMLSelectElement>) =>
    actions?.handleUpdateRow(Number(e.target.value));

  const pagination: IPagination = {
    totalPages,
    currentPage,
    pageSize: rowNumber,
    handlePageChange: actions?.handleUpdateCurrentPage as (e: number) => void,
    handlePageOption,
  };

  return (
    <>
      <div className="table-container">
        {stateStatus.isFilter && (
          <div className="filter-button-container">
            <button onClick={() => actions?.handleFilter(undefined)}>
              cancel filter
            </button>
          </div>
        )}
        <UserTable
          handleFilter={(criteria) => actions?.handleFilter(criteria, users)}
          users={currentPageData}
        />
      </div>
      <Pagination pagination={pagination} />
    </>
  );
}
