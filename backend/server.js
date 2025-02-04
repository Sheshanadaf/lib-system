const express = require("express");
const { getItems } = require("./dynamo"); // Import the DynamoDB helper functions
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 5000;

// API endpoint to get library data
app.get("/library", async (req, res) => {
  try {
    const items = await getItems();
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
