import { TStatus } from "./IUser";

export interface IFilterUserProps {
    id?: string,
    organization?: string,
    username?: string,
    email?: string,
    phone?: string,
    date?: string,
    status?: TStatus | string,
}