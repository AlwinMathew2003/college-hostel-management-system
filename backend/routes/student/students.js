import Express from "express";
import { addStudent, getAllPerm } from "../../controllers/student/students.js";

const router = Express.Router();

//add a user
router.post("/add", addStudent);

//get all mess permission request for a student
router.get("/getallperm/:adm_no", getAllPerm);
//delete a user
// router.post("/delete", );

//update a user
// router.post('/update', )
export default router;
