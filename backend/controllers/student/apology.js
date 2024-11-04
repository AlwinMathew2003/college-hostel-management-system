import db from "../../mysql.js"; // Update the path if necessary

export const apologyCount = async (req, res) => {
    const { adm_no } = req.params;

    // Query to count apologies and select messages from the reason column
    const query = `
        SELECT COUNT(*) AS apology_count, GROUP_CONCAT(reason) AS reasons 
        FROM apology 
        WHERE admno = ? AND status = 0`;

    console.log("Hello!");

    try {
        // Use the promise-based query method
        const [results] = await db.query(query, [adm_no]);
        
        // Destructure results
        const apologyCount = results.length > 0 ? results[0].apology_count : 0;
        const reasons = results.length > 0 ? results[0].reasons.split(',') : []; // Split reasons into an array

        console.log(apologyCount, reasons);
        
        // Return the count of apologies and the list of reasons
        return res.json({ apology_count: apologyCount, reasons });
    } catch (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
    }
}
