import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { IUser } from "./user.interface";

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const result = await UserService.createUser(userData);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully",
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};
