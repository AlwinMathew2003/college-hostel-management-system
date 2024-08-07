import Express from "express";
import { messcutPermissionPost } from "../../controllers/student/messCut.js";
const router = Express.Router();

router.post("/messcutpermission", messcutPermissionPost);

export default router;
