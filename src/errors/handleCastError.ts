import { IGenericErrorMassage } from "./../interfaces/error";
import mongoose from "mongoose";

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMassage[] = [
    {
      path: error.path,
      message: "Invalid Id",
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: "Cast Error",
    errorMessages: errors,
  };
};

export default handleCastError;
