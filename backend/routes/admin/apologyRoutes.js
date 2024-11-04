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

router.put('/update/:id',async(req,res)=>{
  const { id } = req.params;
  const { status } = req.body;

  try {
      // Update the status in the database
      await db.query('UPDATE apology SET status = ? WHERE id = ?', [status, id]);
      return res.status(200).json({ message: 'Status updated successfully.' });
  } catch (error) {
      console.error('Error updating status:', error);
      return res.status(500).json({ error: 'Database error' });
  }
})



export default router;
