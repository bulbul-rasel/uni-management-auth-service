import { Model } from "mongoose";

export type IAcademicSemesterMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type IAcademicSemesterTitle = "Autumn" | "Fall" | "Summer";

export type IAcademicSemesterCode = "01" | "02" | "03";

export type IAcademicSemester = {
  title: IAcademicSemesterTitle;
  year: string;
  code: IAcademicSemesterCode;
  startMonth: IAcademicSemesterMonth;
  endMonth: IAcademicSemesterMonth;
};

export type IAcademicSemesterFilter = {
  searchTerm?: string;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;
