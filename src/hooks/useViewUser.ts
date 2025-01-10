import IUserResp from "@/interface/IUser";
import { addUser } from "@/utils/indexedDBHelper";
import { useRouter } from "next/navigation";

const useViewUser = (users: IUserResp[]) => {
    const router = useRouter();
    const findUser = (id: string) => users.find(
        (user) => user.personal_information.id === id
      );

  const handleStatusOption = async (id: string, actionId: number) => {
    if (actionId === 1) {
      const foundUser = findUser(id);
      if (foundUser) {
        await addUser({ ...{ id }, ...foundUser });
        return router.push(`users/${id}`);
      }
      alert("something went wrong!");
    }

    return
  };

  return handleStatusOption 
}

export default useViewUser;