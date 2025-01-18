import { useGetUsers } from "@/hooks";
import {
  UserDispatchContext,
  UsersContext,
} from "@/hooks/context/useUser.context";
import { useUserAction } from "@/hooks/useUserAction";

interface IUsersProviders {
  children: React.ReactNode;
}

export default function UsersProviders({ children }: IUsersProviders) {
  const { data, dispatch } = useGetUsers();
  const actions = useUserAction(dispatch);
  return (
    <UsersContext.Provider value={data}>
      <UserDispatchContext.Provider value={actions}>
        {children}
      </UserDispatchContext.Provider>
    </UsersContext.Provider>
  );
}
