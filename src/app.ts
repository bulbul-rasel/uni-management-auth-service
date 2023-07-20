import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { AcademicSemesterRoutes } from "./app/modules/academicSemester/academicSemester.route";
import routers from "./app/routes";
import httpStatus from "http-status";
const app: Application = express();
const port = 3000;

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application router
// app.use("/api/v1/users/", UserRoutes);
// app.use("/api/v1/academic-semesters/", AcademicSemesterRoutes);
app.use("/api/v1/", routers);
// // testing
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   throw new Error("Oree baba error");
//   // next("Oree Next level Error");
// });

// global error handler

app.use(globalErrorHandler);
// App not Found

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessage: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
});

export default app;
