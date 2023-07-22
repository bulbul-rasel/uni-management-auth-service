import { z } from "zod";
import { academicSemesterMonths } from "./academicSemester.constant";

const CreateAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(["Autumn", "Summer", "Fall"], {
      required_error: "Role required",
    }),
    year: z.string({
      required_error: "Year required",
    }),
    code: z.enum(["01", "02", "03"], {
      required_error: "Code required",
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: "Start Month required",
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: "End Month required",
    }),
  }),
});

const UpdateAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum(["Autumn", "Summer", "Fall"], {
          required_error: "Role required",
        })
        .optional(),
      year: z
        .string({
          required_error: "Year required",
        })
        .optional(),
      code: z
        .enum(["01", "02", "03"], {
          required_error: "Code required",
        })
        .optional(),
      startMonth: z
        .enum([...academicSemesterMonths] as [string, ...string[]], {
          required_error: "Start Month required",
        })
        .optional(),
      endMonth: z
        .enum([...academicSemesterMonths] as [string, ...string[]], {
          required_error: "End Month required",
        })
        .optional(),
    }),
  })
  .refine(
    (data) =>
      (data.body.title && data.body.code) ||
      !data.body.title ||
      !data.body.code,
    {
      message: "Either both title and code should be provided or neither",
    }
  );

export const AcademicSemesterValidation = {
  CreateAcademicSemesterZodSchema,
  UpdateAcademicSemesterZodSchema,
};
