import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicFacultyController } from "./academicFaculty.controller";
import { AcademicFacultyValidation } from "./academicFaculty.validations";

const router = express.Router();

router.post(
  "/create-faculty",
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema)
);

router.get("/:id", AcademicFacultyController.getSingleFaculty);

router.get("/", AcademicFacultyController.getAllFaculties);

router.patch(
  "/:id",
  validateRequest(AcademicFacultyValidation.updatefacultyZodSchema),
  AcademicFacultyController.updateFaculty
);

router.delete("/:id", AcademicFacultyController.deleteFaculty);

export const AcademicFacultyRoutes = router;
