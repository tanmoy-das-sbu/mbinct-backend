import mongoose from "mongoose";

const resultSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  Id: {
    type: Number,
    required: true,
  },
  ExaminationName: {
    type: String,
    required: true,
  },
  RegistrationNumber: {
    type: String,
    unique: true,
    required: true,
  },
  CourseCode: {
    type: String,
    required: true,
  },
  CourseName: {
    type: String,
    required: true,
  },
  Credits: {
    type: Number,
    required: true,
  },
  Internal: {
    type: Number,
    required: true,
  },
  CEXUEX: {
    type: Number,
    required: true,
  },
  TotalMarks: {
    type: Number,
    required: true,
  },
  MarksObtained: {
    type: Number,
    required: true,
  },
  LetterGrade: {
    type: String,
    required: true,
  },
  SGPA: {
    type: Number,
    required: true,
  },
  AggregatePercentage: {
    type: Number,
    required: true,
  },
  CGPA: {
    type: Number,
  },
  CreatedBy: {
    type: String,
  },
  CreatedDate: {
    type: Date,
  },
  ModifiedBy: {
    type: String,
  },
  ModifiedDate: {
    type: Date,
  },
});

export const Result = mongoose.model("result", resultSchema);
