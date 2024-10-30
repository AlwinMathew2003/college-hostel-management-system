import db from "../../mysql.js";

export const apologyReqPost = async (req, res) => {
  try {
    const {
      _id,
      Reason,
      date,
      Apology_no,
      Adm_no,
      Status,
    } = req.body;

    const [result] = await db.query(
      "INSERT INTO apology (id, reason, date, apology_no, admno, status) VALUES (?, ?, ?, ?, ?, ?)",
      [_id, Reason, date, Apology_no, Adm_no, Status]
    );

    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const apologyReqGet = async (req, res) => {
  try {
    const [apologies] = await db.query(`
      SELECT 
        apology.*, 
        student.name AS Stud_name, 
        student.room_no AS Room_no,
        student.sem AS semester,      -- Fetching semester directly
        student.department AS className -- Fetching class from department
      FROM 
        apology
      JOIN 
        student 
      ON 
        apology.admno = student.admno
    `);

    res.status(200).json(apologies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


