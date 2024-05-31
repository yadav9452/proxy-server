const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Endpoint to fetch data
app.get("/api/sample-data", async (req, res) => {
  try {
    // Make a GET request to the external API using the environment variable
    const response = await axios.get(process.env.API_URL);
    // Send the response data back to the client
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Send an error response if fetching data fails
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
