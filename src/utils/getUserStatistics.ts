import IUserResp from "@/interface/IUser";

export default function getUserStatistics(users: IUserResp[]) {
  const stats = {
    loanUsers: 0,
    savingsUsers: 0,
    activeUsers: 0,
    allUsers: users.length || 0,
  };

  users.forEach((user) => {
    // Check if the user has loans
    if (user.loans && user.loans.length > 0) {
      stats.loanUsers++;
    }

    // Check if the user has savings
    if (user.savings && user.savings.savings_balance > 0) {
      stats.savingsUsers++;
    }

    // Check if the user is active based on their status
    if (user.personal_information && user.personal_information.status === "active") {
      stats.activeUsers++;
    }
  });

  return stats;
}