import { useEffect, useState } from "react";
import { TextInput } from "../common/input";
import { ICompany } from "@/utils/indexedDBHelper";
import { useForm } from "react-hook-form";
import {
  hidePopupProps,
  IDefaultValues,
  TStatus,
  userStatus,
} from "@/interface/IUser";
import { getCompanies } from "@/utils/indexedDBQueries";
import { defaultValues } from "@/utils/defaultValues/userFilter";

export default function UserFilter({
  hidePopup,
  handleFilter,
}: hidePopupProps) {
  const maxDate = new Date().toISOString().split("T")[0];
  const [companies, setCompanies] = useState<ICompany>();

  useEffect(() => {
    getCompanies(setCompanies);
  }, []);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const handleFilterUser = (data: IDefaultValues) => {
    handleFilter(data);
    hidePopup(false);
  };

  const handleReset = () => {
    handleFilter(undefined);
    hidePopup(false);
  };

  return (
    <form
      className="inner-form"
      onSubmit={handleSubmit(handleFilterUser)}
      onReset={handleReset}
    >
      <p>Organization</p>
      {companies && (
        <select className="form-select" {...register("organization")}>
          {companies &&
            companies?.data.map((e, _) => (
              <option className="capitalize" key={_}>
                {e}
              </option>
            ))}
        </select>
      )}
      <p>Username</p>
      <TextInput type="text" {...register("username")} placeholder="username" />
      <p>Email</p>
      <TextInput type="email" {...register("email")} placeholder="email" />
      <p>Date</p>
      <TextInput
        max={maxDate}
        type="date"
        {...register("date")}
        placeholder="date"
      />
      <p>Phone number</p>
      <TextInput
        type="phone"
        {...register("phone")}
        placeholder="phone number"
      />
      <p>Status</p>
      <select className="form-select" {...register("status")}>
        <option disabled>Select status</option>
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
