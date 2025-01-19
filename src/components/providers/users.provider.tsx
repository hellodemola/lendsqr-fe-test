import { useGetUsers } from "@/hooks";
import {
  UserDispatchContext,
  UsersContext,
} from "@/hooks/context/useUser.context";

interface IUsersProviders {
  children: React.ReactNode;
}

export default function UsersProviders({ children }: IUsersProviders) {
  const { data, actions } = useGetUsers();
  return (
    <UsersContext.Provider value={data}>
      <UserDispatchContext.Provider value={actions}>
        {children}
      </UserDispatchContext.Provider>
    </UsersContext.Provider>
  );
}
