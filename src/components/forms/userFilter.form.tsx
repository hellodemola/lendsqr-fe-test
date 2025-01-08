import { useEffect, useState } from "react";
import { TextInput } from "../common/input";
import { addFilter, ICompany } from "@/utils/indexedDBHelper";
import { getCompanies } from "@/utils/indexQueries";
import { useForm } from "react-hook-form";
import { TStatus, userStatus } from "@/interface/IUser";
import { IFilterUserProps } from "@/interface/IFilterUser";

export interface IDefaultValues {
  organization: string;
  email: string;
  username: string;
  date: string;
  phone: string;
  status: TStatus | undefined;
}

interface hidePopupProps {
  hidePopup: (e: boolean) => void;
  handleFilter: (e: IFilterUserProps) => void;
}

const defaultValues: IDefaultValues = {
  organization: "",
  email: "",
  username: "",
  date: "",
  phone: "",
  status: undefined,
};

export default function UserFilter({
  hidePopup,
  handleFilter,
}: hidePopupProps) {
  const [companies, setCompanies] = useState<ICompany>();

  useEffect(() => {
    getCompanies(setCompanies);
  }, []);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const handleFilterUser = async (data: IDefaultValues) => {
    // update filter obj in db
    console.log({ data });
    handleFilter(data);
    await addFilter(data);
    hidePopup(false);
  };

  return (
    <form className="inner-form" onSubmit={handleSubmit(handleFilterUser)}>
      <p>Organization</p>
      {companies && (
        <select className="form-select" {...register("organization")}>
          {companies &&
            companies?.data.map((e, _) => <option key={_}>{e}</option>)}
        </select>
      )}
      <p>Username</p>
      <TextInput type="text" {...register("username")} placeholder="user" />
      <p>Email</p>
      <TextInput type="email" {...register("email")} placeholder="email" />
      <p>Date</p>
      <TextInput type="date" {...register("date")} placeholder="date" />
      <p>Phone number</p>
      <TextInput
        type="phone"
        {...register("phone")}
        placeholder="phone number"
      />
      <p>Status</p>
      <select className="form-select" {...register("status")}>
        {userStatus.map((status: TStatus) => (
          <option key={status}>{status}</option>
        ))}
      </select>
      <div className="flex justify-between gap">
        <button className="outline" type="reset">
          Reset
        </button>
        <button type="submit">Filter</button>
      </div>
    </form>
  );
}
