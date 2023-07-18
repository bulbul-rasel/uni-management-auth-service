import { z } from "zod";
import { academicSemesterMonths } from "./academicSemester.constant";

const CreateAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(["Autumn", "Summer", "Fall"], {
      required_error: "Role required",
    }),
    year: z.number({
      required_error: "Year required",
    }),
    code: z.enum(["01", "02", "03"], {
      required_error: "Code required",
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: "Start Month required",
    }),
    endMonth: z.enum(
      [
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
      ],
      {
        required_error: "End Month required",
      }
    ),
  }),
});

export const AcademicSemesterValidation = {
  CreateAcademicSemesterZodSchema,
};
