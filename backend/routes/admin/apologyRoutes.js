import Express from "express";
import {
  apologyReqPost,
  apologyReqGet,
} from "../../controllers/admin/apologyRoutes.js"; // change
const router = Express.Router();

router.post("/apologyrequest", apologyReqPost);

router.get("/apologyview", apologyReqGet);

export default router;
