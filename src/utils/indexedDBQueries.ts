import IUserResp from "@/interface/IUser";
import { addCompanies, getAllCompanies, getUser, ICompany } from "./indexedDBHelper";

const id = "lendsqr_vendors";

export const getCompanies = async (setCompanies: (e: ICompany) => void) => {
    await getAllCompanies()
      .then((res: ICompany[]) => {
        if (res.length > 0) {
          const companyArr = res.find((e) => e.id === id);
          if (companyArr) setCompanies(companyArr);
        }
      })
      .catch((err) => {
        alert("something went wrong");
        console.log({ err });
      });
  };

export const saveCompany = async (data: string []) => {
  const companyObj = { data, id }
  await addCompanies(companyObj)
}

export const getSingleUser = async(user: string, setCurrentUser: (user: IUserResp) => void) => {
   await getUser(user)
   .then((res) => setCurrentUser(res))
}