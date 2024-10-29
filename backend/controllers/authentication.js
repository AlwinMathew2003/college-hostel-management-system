import db from "../mysql.js";

export const signin = async (req, res) => {
  try {
    console.log(req.body);

    // Query for the user in the login table based on the provided username
    const [rows] = await db.execute(
      "SELECT * FROM login WHERE username = ?",
      [req.body.admno]
    );

    // Check if the user was found
    if (rows.length > 0) {
      const user = rows[0]; // Get the first user object

      // Check if the password matches
      if (user.password === req.body.password) {
        console.log("User authenticated:", user);
        res.json({ id: user.id, admno: user.username, date: user.date }); // Send user info without password
      } else {
        res.status(401).json({ message: "Incorrect password" }); // Unauthorized
      }
    } else {
      res.status(404).json({ message: "User not found" }); // Not found
    }
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const fetchUsers = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM login");

    if (rows.length > 0) {
      // Send only the first user as a JSON object, not an array
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
};