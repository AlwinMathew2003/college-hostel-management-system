import db from "../mysql.js";

export const signin = async (req, res) => {
  try {
    console.log(req.body);

    // Query for the user in the login table based on the provided username
    const [rows] = await db.execute("SELECT * FROM login WHERE username = ?", [
      req.body.admno,
    ]);

    console.log(rows.length);

    // Check if the user was found
    if (rows.length > 0) {
      const user = rows[0]; // Get the first user object

      // Check if the password matches
      if (user.password === req.body.password) {
        console.log("User authenticated:", user);
        if(user.username === "admin")
        {
          return res.json({admin:"Admin Validated"});
        }
        const [studentResults] = await db.execute(
          "SELECT * FROM student WHERE admno = ?",
          [user.username]
        );

        if (studentResults.length === 0) {
          return res.status(404).json({ error: "Student details not found" });
        }

        const student = studentResults[0];
        const modifiedStudentData = {
          adm_no: student.admno, // Renamed from `admno` to `studentId`
          name: student.name, // Keeping `name` the same
          Room_no: student.room_no, // Renamed from `room_no` to `roomNumber`
          department: student.department,
          sem: student.sem,
          phone_no: student.phone_no,
          guardian_name: student.guardian_name,
          guardian_no: student.guardian_no,
          jecc_mail: student.jecc_mail.trim(), // Trim any trailing newline characters
        };

        console.log(student);
        console.log(modifiedStudentData);
        res.json(modifiedStudentData); // Send user info without password
      } else {
        res.status(401).json({ message: "Incorrect password" }); // Unauthorized
      }
    } else {
      console.log("User not found")
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
