import React, { useState, useEffect } from "react";
import Admin_Navbar from "../../../components/admin_navbar/Admin_Navbar";
import "./NameWiseReport.css";
import axios from "axios";
import jsPDF from "jspdf"; // For creating PDF
import * as XLSX from "xlsx"; // For creating Excel

const NameWiseReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entries, setEntries] = useState(10);
  const [semester, setSemester] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState();
  const [selectedStudent, setSelectedStudent] = useState();
  const [students, setStudents] = useState([]);
  const [messCut,setMessCut] = useState([]);
  const [studentData, setStudentData] = useState([]);
  // Dummy data for table

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/students");
        console.log(res.data);
        setStudentData(res.data);
        console.log(studentData);
        setSemester([...new Set(res.data.map((item) => item.sem))]);
      } catch {
        console.log("Error fetching Data");
      }
    };
    fetchStudentData();
  }, []);

  useEffect(() => {
    setStudents(
      studentData
        .filter((item) => item.sem == selectedSemester)
        .map((item) => item.name)
    );
  }, [selectedSemester]);


  const loadData = async() => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/messCut', {
        params: { 
          selectedSemester,
          selectedStudent
        }
      });
      console.log(response.data);
      setMessCut(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4'); // Portrait orientation, mm unit, A4 size
  
    // Set up some initial settings
    const marginLeft = 20;
    const marginTop = 20;
    const lineHeight = 10; // Space between rows
    const startY = marginTop + 10; // Starting Y position for data
  
    // Add title
    doc.setFontSize(16);
    doc.text("Mess Cut Report", marginLeft, startY);
  
    // Add column headers
    doc.setFontSize(12);
    doc.text("ID", marginLeft, startY + 15);
    doc.text("Adm No", marginLeft + 20, startY + 15);
    doc.text("Date", marginLeft + 70, startY + 15);
    doc.text("Breakfast", marginLeft + 110, startY + 15);
    doc.text("Lunch", marginLeft + 150, startY + 15);
    doc.text("Snack", marginLeft + 190, startY + 15);
    doc.text("Dinner", marginLeft + 230, startY + 15);
  
    // Add data rows
    messCut.forEach((item, index) => {
      var yPosition = startY + 25 + index * lineHeight; // Adjust for header row and line height
  
      // Ensure we fit the data within the page limits
      if (yPosition > 270) {
        doc.addPage(); // If the data exceeds page length, add a new page
        doc.text("Mess Cut Report", marginLeft, 20); // Title on new page
        doc.text("ID", marginLeft, 30);
        doc.text("Adm No", marginLeft + 20, 30);
        doc.text("Date", marginLeft + 70, 30);
        doc.text("Breakfast", marginLeft + 110, 30);
        doc.text("Lunch", marginLeft + 150, 30);
        doc.text("Snack", marginLeft + 190, 30);
        doc.text("Dinner", marginLeft + 230, 30);
        yPosition = 40; // Reset position after adding new page
      }
  
      // Print data on the page
      doc.text(item.id.toString(), marginLeft, yPosition);
      doc.text(item.admno, marginLeft + 20, yPosition);
      doc.text(item.date, marginLeft + 70, yPosition);
      doc.text(item.breakfast.toString(), marginLeft + 110, yPosition);
      doc.text(item.lunch.toString(), marginLeft + 150, yPosition);
      doc.text(item.snack.toString(), marginLeft + 190, yPosition);
      doc.text(item.dinner.toString(), marginLeft + 230, yPosition);
    });
  
    // Save the PDF
    doc.save("mess_cut_report.pdf");
    console.log("PDF Created");
  };

  // Create Excel function
  const createExcel = () => {
    const ws = XLSX.utils.json_to_sheet(messCut);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, "report.xlsx");
    console.log("Excel Created");
  };

  return (
    <div>
      <Admin_Navbar />

      <div className="name-wise-report-container">
        <div className="name-wise-report-content">
          <h1 className="name-wise-report-heading">Name Wise Mess Report</h1>

          {/* <div className="name-wise-report-form-group">
            <label htmlFor="semester">Select Semester:</label>
            <select
              id="semester"
              name="semester"
              className="name-wise-report-dropdown"
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option> */}
          {/* Add more options as needed */}
          {/* </select>
          </div>
          <div className="name-wise-report-form-group">
            <label htmlFor="student">Select Student:</label>
            <select
              id="student"
              name="student"
              className="name-wise-report-dropdown"
            >
              <option value="">Select Student</option>
              <option value="student1">Student 1</option>
              <option value="student2">Student 2</option>
              <option value="student3">Student 3</option> */}
          {/* Add more options as needed */}
          {/* </select>
          </div> */}

          {/*           
          <div className="name-wise-report-form-group">
            <label htmlFor="semester">Select Semester:</label>
            <select
              id="semester"
              name="semester"
              className="name-wise-report-dropdown"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option value="">Select Semester</option>
              {semesters.map((semester) => (
                <option key={semester.id} value={semester.id}>
                  {semester.name}
                </option>
              ))}
            </select>
          </div> */}

          {/* <div className="name-wise-report-form-group">
                <label htmlFor="student">Select Student:</label>
                <select id="student" name="student" className="name-wise-report-dropdown">
                    <option value="">Select Student</option>
                    {students.map((student) => (
                        <option key={student.id} value={student.id}>
                            {student.name}
                        </option>
                    ))}
                </select>
            </div> */}

          <div className="name-wise-report-form-group">
            <label htmlFor="semester">Select Semester:</label>
            <select
              id="semester"
              name="semester"
              className="name-wise-report-dropdown"
              value={selectedSemester}
              onChange={(e) => {
                setSelectedSemester(e.target.value);
              }}
            >
              <option value="">Select Semester</option>
              {semester.map((sem, index) => (
                <option key={index} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
          </div>

          <div className="name-wise-report-form-group">
            <label htmlFor="student">Select Student:</label>
            <select
              id="student"
              name="student"
              className="name-wise-report-dropdown"
              value={selectedStudent}
              onChange={(e) => {
                setSelectedStudent(e.target.value);
              }}
            >
              <option value="">Select Student</option>
              {students.map((student, index) => (
                <option key={index} value={student}>
                  {student}
                </option>
              ))}
            </select>
          </div>

          <div className="name-wise-report-buttons">
            <button className="name-wise-report-button" onClick={loadData}>
              Load Data
            </button>
            <button className="name-wise-report-button" onClick={createPDF}>
              Create PDF
            </button>
            <button className="name-wise-report-button" onClick={createExcel}>
              Create Excel
            </button>
          </div>
          <div className="name-wise-report-controls">
            <div className="name-wise-report-entries">
              <label htmlFor="entries">Show</label>
              <select
                id="entries"
                name="entries"
                className="name-wise-report-dropdown"
                value={entries}
                onChange={(e) => setEntries(parseInt(e.target.value))}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                {/* Add more options as needed */}
              </select>
              <span style={{ marginLeft: "10px" }}>entries</span>
            </div>
            <div className="name-wise-report-search">
              <label style={{ marginRight: "10px" }}>Search :</label>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="name-wise-report-search-input"
              />
            </div>
          </div>
          <table className="name-wise-report-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Tea</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {messCut.length > 0 ? (
                messCut.map((item) => (
                  <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td className="text-center text-green-500 text-2xl font-bold">{item.breakfast === 1 ? '✓' : ''}</td>
                  <td className="text-center text-green-500 text-2xl font-bold">{item.lunch === 1 ? '✓' : ''}</td>
                  <td className="text-center text-green-500 text-2xl font-bold">{item.snack === 1 ? '✓' : ''}</td>
                  <td className="text-center text-green-500 text-2xl font-bold">{item.dinner === 1 ? '✓' : ''}</td>
                </tr>
                
                ))
              ) : (
                <tr>
                  <td colSpan="6">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NameWiseReport;
