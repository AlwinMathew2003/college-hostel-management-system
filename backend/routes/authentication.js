import Express from "express";
import { signin,fetchUsers } from "../controllers/authentication.js";
const router = Express.Router();

//sigin
router.post("/", signin);

//for testing signup
// router.post("/signup", signup);

export default router;
