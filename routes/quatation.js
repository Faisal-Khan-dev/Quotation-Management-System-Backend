const express = require("express");
const router = express.Router();
const {
  createQuotation,
  getQuotations,
  getQuotationById,
  updateQuotation,
  deleteQuotation,
  dashboardSummary,
  getNotifications,
  createQuotationStaff
  
} = require("../controller/quatation.controller");


router.post("/create", createQuotation);
router.post("/create-quotation-staff", createQuotationStaff);
router.get("/get", getQuotations);
router.get("/getBy/:id", getQuotationById);
router.put("/update/:id", updateQuotation);
router.delete("/delete/:id", deleteQuotation);
router.get("/dasboard-summary", dashboardSummary);
router.get("/get-notifications", getNotifications);

module.exports = router;
