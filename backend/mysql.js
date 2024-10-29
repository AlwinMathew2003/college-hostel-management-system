import mysql from "mysql2/promise.js";

// Create a connection pool
const db  = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hostel'
  });
  
  // // Test the connection
  // db.getConnection((err, connection) => {
  //   if (err) {
  //     console.error('Error connecting to MySQL:', err);
  //     return;
  //   }
  //   console.log('Connected to MySQL!');
  //   connection.release(); // Release the connection back to the pool
  // });
  
  async function testConnection() {
    try {
      const connection = await db.getConnection();
      console.log('Connected to MySQL!');
      connection.release(); // Release the connection back to the pool
    } catch (err) {
      console.error('Error connecting to MySQL:', err);
    }
  }

  testConnection();
  
  export default db;