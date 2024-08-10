import Express from "express";
import { messcutPermissionPost , messcutPermissionGet } from "../../controllers/student/messCut.js";

const router = Express.Router();

router.post("/messcutpermission", messcutPermissionPost);
router.get("/messcutpermission/approval", messcutPermissionGet);

export default router;
