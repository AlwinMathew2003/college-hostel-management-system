import db from "../../mysql.js";

export const apologyReqPost = async (req, res) => {
  try {
    const {
      _id,
      Room_no,
      Stud_name,
      Reason,
      date,
      Apology_no,
      Adm_no,
      Status,
    } = req.body;

    const [result] = await db.query(
      "INSERT INTO apologies (_id, Room_no, Stud_name, Reason, date, Apology_no, Adm_no, Status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [_id, Room_no, Stud_name, Reason, date, Apology_no, Adm_no, Status]
    );

    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const apologyReqGet = async (req, res) => {
  try {
    const [apologies] = await db.query("SELECT * FROM apologies");
    res.status(200).json(apologies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
