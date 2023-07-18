import { NextFunction, Request, RequestHandler, Response } from "express";
import { AcademicSemesterService } from "./academicSemester.service";

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = AcademicSemesterService.createSemester(academicSemesterData);
    res.status(200).json({
      success: true,
      message: `Academic Semester created successfully`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
