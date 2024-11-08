import Express from "express";
import {apologyCount} from "../../controllers/student/apology.js";
const router = Express.Router();

// Get apology count of particular student
router.get('/apologyCount/:adm_no', apologyCount);

export default router;
