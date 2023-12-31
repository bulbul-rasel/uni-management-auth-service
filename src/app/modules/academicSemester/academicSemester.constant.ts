import {
  IAcademicSemesterCode,
  IAcademicSemesterMonth,
  IAcademicSemesterTitle,
} from "./academicSemester.interface";

export const academicSemesterTitles: IAcademicSemesterTitle[] = [
  "Autumn",
  "Summer",
  "Fall",
];
export const academicSemesterCodes: IAcademicSemesterCode[] = [
  "01",
  "02",
  "03",
];

export const academicSemesterMonths: IAcademicSemesterMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};

export const academicSemesterSemesterSearchableFields = [
  "title",
  "code",
  "year",
];

export const academicSemesterSemesterFilterableFields = [
  "searchTerm",
  "title",
  "code",
  "year",
];
