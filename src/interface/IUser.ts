export type TStatus = 'blocked' | 'active' | 'inactive' | 'pending'

export const userStatus: TStatus[] = ['blocked', 'active', 'inactive', 'pending']

export interface IOrganization {
    name: string;
    address: string;
    phone_number: string;
}

export default interface IUserResp {
  personal_information: {
    full_name: string;
    phone_number: string;
    id: string;
    email_address: string;
    bvn: number;
    gender: string;
    marital_status: string;
    children: number;
    type_of_residence: string;
    joined_date: string;
    status: string;
    username: string;
  };
  organization: Array<IOrganization>;
  education_and_employment: {
    level_of_education: string;
    employment_status: string;
    sector_of_employment: string;
    duration_of_employment: string;
    office_email: string;
    monthly_income: number;
    loan_repayment: number;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: Array<{
    full_name: string;
    phone_number: string;
    email_address: string;
    relationship: string;
  }>;
  financial_information: {
    user_tier: string;
    account_balance: number;
    bank_details: {
      account_number: number;
      bank_name: string;
    };
  };
  documents: {
    identification: string;
    proof_of_address: string;
    bank_statement: string;
  };
  bank_details: {
    bank_name: string;
    account_number: number;
    account_name: string;
  };
  loans: Array<{
    loan_id: string;
    loan_amount: number;
    repayment_amount: number;
    status: string;
  }>;
  savings: {
    savings_balance: number;
    saving_plan: string;
    next_due_date: string;
  };
  app_and_system: {
    last_login: string;
    registered_device: string;
    app_version: string;
    notification_status: string;
  };
}