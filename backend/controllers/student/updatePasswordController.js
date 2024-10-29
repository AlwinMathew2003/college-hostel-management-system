// Import the database connection (assuming it's configured in `db.js`)
import db from "../../mysql.js"; // Adjust the path as needed

export const updatePassword = async (req, res) => {
  try {
    const { adm_no, newPassword } = req.body;

    // Update password in MySQL based on adm_no
    const [result] = await db.query(
      "UPDATE login SET password = ? WHERE username = ?",
      [newPassword, adm_no]
    );

    // Check if any row was affected (updated)
    if (result.affectedRows === 0) {
      return res.json({ message: "Could not update password!" });
    }

    console.log("User details:", { adm_no, newPassword }); // Log user details for debugging
    res.json({ message: "Successfully updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occurred" });
  }
};
