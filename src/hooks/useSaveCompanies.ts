import IUserResp from "@/interface/IUser";
import { saveCompany } from "@/utils/indexedDBQueries";
import { useMemo } from "react";

const useSaveCompanies = (users: Array<IUserResp>) => {
    useMemo(() => {
      if (users.length > 0){
        const organizationArr = users.map((e) => e.organization.map((e) => e.name));
        const flatOrgArr = [...new Set(organizationArr.flat())]
        saveCompany(flatOrgArr);
      }
    }, [users])
};

export default useSaveCompanies;