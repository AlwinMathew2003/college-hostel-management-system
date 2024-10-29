// Import the database connection (assumes you've set it up as shown in `db.js`)
import db from "../../mysql.js"; // Update the path if necessary

export const complaintPost = async (req, res) => {
  try {
    const { adm_no, Room_no, message, status } = req.body;

    // Insert the complaint data into MySQL
    const [result] = await db.query(
      "INSERT INTO complaints (adm_no, Room_no, message, status) VALUES (?, ?, ?, ?)",
      [adm_no, Room_no, message, status]
    );

    // Create a response object with the inserted complaint data
    const newComplaint = {
      id: result.insertId,
      adm_no,
      Room_no,
      message,
      status,
    };

    res.status(201).json(newComplaint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const testComplaint = async (req, res) => {
  try {
    const { adm_no, message, stat } = req.body;
    const [user] = await db
      .promise()
      .query(`SELECT * FROM students WHERE adm_no = ?`, [adm_no]);

    const [result] = await db.promise().query(
      "INSERT INTO complaints (adm_no, Room_no, message, status) VALUES (?, ?, ?, ?)",
      [adm_no, user[0].Room_no, message, stat]
    );

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
