import Express from "express";
import { addStudent } from "../../controllers/student/students.js";

const router = Express.Router();

//add a user
router.post("/add", addStudent);

//delete a user
// router.post("/delete", );

//update a user
// router.post('/update', )
export default router;
