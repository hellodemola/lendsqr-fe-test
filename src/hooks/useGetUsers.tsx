import IUserRes from "@/interface/IUser";
import { useEffect, useState } from "react";

const userUrl = "/api/users";

const useGetUsers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [users, setUsers] = useState<IUserRes[]>([]);

  useEffect(() => {
    fetch(userUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setTotalPage(Number(data?.length));
      })
      .catch((error) => {
        setUsers([]);
        console.log(error);
      });
  }, []);

  const currentPageData = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageOption = (option: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(option.target.value));
  };

  return {
    users,
    currentPageData,
    pagination: {
      handlePageChange,
      totalPages,
      currentPage,
      handlePageOption,
      pageSize,
    },
  };
};

export default useGetUsers;
