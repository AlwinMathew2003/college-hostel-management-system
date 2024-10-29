import Express from "express";
import {
  complaintPost,
  testComplaint,
} from "../../controllers/student/complaint.js";
const router = Express.Router();

router.post("/complaint", complaintPost);

router.post("/test", testComplaint);
export default router;
