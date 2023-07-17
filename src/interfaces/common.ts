import { IGenericErrorMassages } from "./error";

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMassages[];
};
