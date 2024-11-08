import db from "../../mysql.js";

export const messCut = async(req,res)=>{
    const {selectedSemester,selectedStudent} = req.query;
    const semester = selectedSemester;
    const name = selectedStudent;
    try {
        const [rows] = await db.query(
          `SELECT m.*
           FROM mess_cut m
           WHERE m.admno = (
             SELECT s.admno
             FROM student s
             WHERE s.sem = ? AND s.name = ?
           )`,
          [semester, name]  // Pass the semester and name to the query
        );

        const formattedRows = rows.map(row => {
            const date = new Date(row.date); // Convert the date string to a Date object
            row.date = date.toLocaleDateString(); // Format the date to "MM/DD/YYYY" (or your preferred format)
            return row;
          });
    
        console.log('Mess Cuts:', formattedRows);
        res.json(formattedRows);
      } catch (err) {
        console.error('Error fetching mess cuts:', err);
        res.json(err);
      }
}

export const dateWiseMessCut = async(req,res)=>{
console.log(req.params.date)
const { selectedDate } = req.query;
try{
    const [students] = await db.query(`SELECT 
        s.name,
        s.sem,
        s.room_no,
        s.department,
        m.breakfast,
        m.snack,
        m.lunch,
        m.dinner
    FROM 
        mess_cut m
    JOIN 
        student s ON m.admno = s.admno
    WHERE 
        DATE(m.date) = ?`,[selectedDate]
        )
    console.log(students);
    res.json(students);
}
catch(err){
    console.log(err);
    res.json(err);
}
}

export const messCutRequest = async(req,res)=>{
  try{
    var [result] = await db.query(`select * from student join mess_request on student.admno = mess_request.admno`)
    console.log(result);
    result = result.map(item => ({
      ...item,
      leaving_date: item.leaving_date instanceof Date ? item.leaving_date.toISOString().split("T")[0] : item.leaving_date,
      returning_date: item.returning_date instanceof Date ? item.returning_date.toISOString().split("T")[0] : item.returning_date
  }));
    
    res.json(result);
  }
  catch(err)
  {
    console.log(err);
  }
}

export const messCutUpdateStatus = async(req,res)=>{
  const { admno } = req.params;
  const { status } = req.body;

  try {
      // Update the status in the database
      await db.query('UPDATE mess_request SET status = ? WHERE admno = ?', [status, admno]);
      return res.status(200).json({ message: 'Status updated successfully.' });
  } catch (error) {
      console.error('Error updating status:', error);
      return res.status(500).json({ error: 'Database error' });
  }
}
