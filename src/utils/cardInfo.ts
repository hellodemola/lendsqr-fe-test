import { IStats } from "@/interface/IStats";

export const cardInfo = (userStats: IStats) : { label: string, number: number, icon: string }[] => [
    { label: "users", number: userStats?.allUsers, icon: "profile.svg" },
    {
      label: "active users",
      number: userStats?.activeUsers,
      icon: "active-users.svg",
    },
    {
      label: "users with loans",
      number: userStats?.loanUsers,
      icon: "loan-users.svg",
    },
    {
      label: "users with savings",
      number: userStats?.savingsUsers,
      icon: "saving-users.svg",
    },
  ];