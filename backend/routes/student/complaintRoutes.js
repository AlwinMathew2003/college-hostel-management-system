import Express from "express";
import { complaintPost } from "../../controllers/student/complaint.js";
const router = Express.Router();

router.post("/complaint", complaintPost);

export default router;
