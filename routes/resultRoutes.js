import express from "express";
const router = express.Router();
import {Result} from "../models/result.models.js";


router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    return res.status(200).send({
      count: results.length,
      data: results,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ Message: error.message });
  }
});
router.get("/:RegistrationNumber", async (req, res) => {
  try {
    const { RegistrationNumber } = req.params;

    const resultPipeline = [
      {
        $match: {
          RegistrationNumber,
        },
      },
      {
        $lookup: {
          from: "student-details", 
          localField: "RegistrationNumber",
          foreignField: "RegistrationNumber",
          as: "studentDetails",
        },
      },
    ];

    const projectStage = {
      $project: {
        _id: 1,
        Id: 1,
        ExaminationName: 1,
        RegistrationNumber: 1,
        CourseCode: 1,
        CourseName: 1,
        Credits: 1,
        Internal: 1,
        CEXUEX: 1,
        TotalMarks: 1,
        MarksObtained: 1,
        LetterGrade: 1,
        SGPA: 1,
        AggregatePercentage: 1,
        CGPA: 1,
        CreatedBy: 1,
        ModifiedBy: 1,
        studentDetails: {
          ID: 1,
          UIDNumber: 1,
          RollNo: 1,
          StudentName: 1,
          FatherName: 1,
          DOB: 1,
          AdmitCardNumber:1,
          Age: 1,
          Religion: 1,
          Caste: 1,
          Category: 1,
          Gender: 1,
          Qualification: 1,
          Percentage: 1,
          EmailId: 1,
          MobileNumber: 1,
          AadharNumber: 1,
          Status: 1,
          CreatedDate: 1,
          ModifiedDate: 1,
        },
      },
    };
    const aggregationPipeline = [...resultPipeline, projectStage];
    const results = await Result.aggregate(aggregationPipeline);

    if (results.length === 0) {
      return res.status(404).send("No results found for this RegistrationNumber");
    }

    return res.status(200).send(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      Error: error.message,
    });
  }
});

export default router;



