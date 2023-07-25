import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

router.get("/:id", StudentController.getSingleStudent);
router.delete("/:id", StudentController.deleteStudent);

router.get("/", StudentController.getAllStudents);

// router.patch(
//   "/create-student",
//   validateRequest(UserValidation.createStudentZodSchema),
//   UserController.createStudent
// );

export const StudentRoutes = router;
