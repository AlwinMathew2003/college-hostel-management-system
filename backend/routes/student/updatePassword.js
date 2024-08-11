import express from "express"
import {updatePassword} from "../../controllers/student/updatePasswordController.js"
const router = express.Router()

router.put("/updatePassword",updatePassword)

export default router;