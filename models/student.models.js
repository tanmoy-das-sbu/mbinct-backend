import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  ID: {
    type: Number,
    required: true,
  },
  UIDNumber: {
    type: String,
    required: true,
  },
  RollNo: {
    type: String,
    required: true,
  },
  RegistrationNumber: {
    type: String,
    unique: true,
    required: true,
  },
  StudentName: {
    type: String,
    required: true,
  },
  FatherName: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  AdmitCardNumber: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Religion: {
    type: String,
    required: true,
  },
  Caste: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Qualification: {
    type: String,
    required: true,
  },
  Percentage: {
    type: Number,
    required: true,
  },
  EmailId: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: String,
    required: true,
  },
  AadharNumber: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  CreatedBy: {
    type: String,
    required: true,
  },
  ModifiedBy: {
    type: String,
    required: true,
  },
  CreatedDate: {
    type: String,
    required: true,
  },
  ModifiedDate: {
    type: String,
    required: true,
  },
});

export const Student = mongoose.model("Student", studentSchema);
