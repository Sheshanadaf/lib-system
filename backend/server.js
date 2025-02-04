const express = require("express");
const { getItems } = require("./dynamo"); // Import the DynamoDB helper functions
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 5000;

// API endpoint to get library data
// Sample API endpoint to get library data with id, name, author, year
app.get("/library", async (req, res) => {
  try {
    // Static data to represent your library items
    const items = [
      { id: 1, name: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
      { id: 2, name: "1984", author: "George Orwell", year: 1949 },
      { id: 3, name: "Moby Dick", author: "Herman Melville", year: 1851 }
    ];

    res.json(items);  // Return the data as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});


app.get('/health', (req, res) => {
    res.status(200).send('OK');  // ✅ ALB will check this response
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
