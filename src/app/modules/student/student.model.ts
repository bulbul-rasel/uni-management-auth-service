import { Schema, Types, model } from "mongoose";
import { bloodGroup, gender } from "./student.constant";
import { IStudent } from "./student.interface";
export const studentSchema = new Schema<IStudent, StudentModel>(
  {
    id: {
      type: "string",
      required: true,
      unique: true,
    },
    name: {
      type: {
        firstName: {
          type: "string",
          required: true,
        },
        middleName: {
          type: "string",
        },
        lastName: {
          type: "string",
          required: true,
        },
      },
      required: true,
    },
    dateOfBirth: {
      type: "string",
    },
    gender: {
      type: "string",
      enum: gender,
    },
    bloodGroup: {
      type: "string",
      enum: bloodGroup,
    },
    email: {
      type: "string",
      unique: true,
      required: true,
    },
    contactNo: {
      type: "string",
      unique: true,
      required: true,
    },
    emergencyContactNo: {
      type: "string",
      unique: true,
      required: true,
    },
    presentAddress: {
      type: "string",
      required: true,
    },
    permanentAddress: {
      type: "string",
      required: true,
    },
    guardian: {
      required: true,
      type: {
        fatherName: {
          type: "string",
          required: true,
        },
        fatherOccupation: {
          type: "string",
          required: true,
        },
        fatherContactNo: {
          type: "string",
          required: true,
          unique: true,
        },
        motherName: {
          type: "string",
          required: true,
        },
        motherOccupation: {
          type: "string",
          required: true,
        },
        motherContactNo: {
          type: "string",
          required: true,
          unique: true,
        },
        address: {
          type: "string",
          required: true,
        },
      },
    },
    localGuardian: {
      required: true,
      type: {
        name: {
          type: "string",
          required: true,
        },
        occupation: {
          type: "string",
          required: true,
        },
        contactNo: {
          type: "string",
          required: true,
          unique: true,
        },
        address: {
          type: "string",
          required: true,
        },
      },
    },
    profileImage: {
      type: "string",
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: "AcademicDepartment",
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: "AcademicSemester",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const Student = model<IStudent, StudentModel>("Student", StudentSchema);
