// Import the database connection (assumes you've set it up as shown in `db.js`)
import db from "../../mysql.js"; // Update the path if necessary

export const messcutPermissionPost = async (req, res) => {
  try {
    const {
      adm_no,
      leavingDate,
      leavingTime,
      reason,
      returningDate,
      returningTime,
      status,
    } = req.body;

    // Insert the permission request into MySQL
    const [result] = await db.query(
      "INSERT INTO mess_request (admno, leaving_date, leaving_time, reason, returning_date, returning_time, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [adm_no, leavingDate, leavingTime, reason, returningDate, returningTime, status]
    );

    // Create a response object with the inserted permission data
    const newPermission = {
      id: result.insertId,
      adm_no,
      leavingDate,
      leavingTime,
      reason,
      returningDate,
      returningTime,
      status,
    };

    res.status(201).json(newPermission);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export const messcutPermissionGet = async (req, res) => {
  try {
    // Fetch all permissions with associated student names by joining on adm_no
    const [permissions] = await db.query(`
      SELECT
        m.id,
        m.adm_no,
        m.leaving_date,
        m.leaving_time,
        m.reason,
        m.returning_date,
        m.returning_time,
        m.status,
        s.name AS studentName
      FROM
        mess_request m
      LEFT JOIN
        student s ON m.adm_no = s.admno
    `);

    res.status(200).json(permissions);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
