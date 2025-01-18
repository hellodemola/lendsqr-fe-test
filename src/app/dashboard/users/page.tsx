"use client";
import UsersProviders from "@/components/providers/users.provider";
import UsersComponent from "@/components/users";

export default function Users() {
  return (
    <UsersProviders>
      <UsersComponent />
    </UsersProviders>
  );
}
