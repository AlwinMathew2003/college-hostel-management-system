import Express from "express";
import {
  apologyReqPost,
  apologyReqGet,
} from "../../controllers/admin/apologyRoutes.js"; // change
import db from "../../mysql.js"
const router = Express.Router();

router.post("/apologyrequest", apologyReqPost);

router.get("/apologyview", apologyReqGet);

// Route to get unique room numbers
router.get('/students/rooms', async (req, res) => {
  try {
      const [rooms] = await db.query("SELECT DISTINCT room_no FROM student");
      console.log(rooms[0])
      res.json(rooms);
  } catch (error) {
      console.error('Error fetching rooms:', error);
      res.status(500).json({ message: 'Failed to fetch room numbers' });
  }
});

// Route to get students based on selected room number
router.get('/students', async (req, res) => {
  const { room_no } = req.query;
  try {
      const [students] = await db.query("SELECT admno, name FROM student WHERE room_no = ?", [room_no]);
      res.json(students);
  } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ message: 'Failed to fetch students' });
  }
});

export default router;
