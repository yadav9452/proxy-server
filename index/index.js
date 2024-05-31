const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/proxy", async (req, res) => {
  try {
    const apiUrl = "http://test.api.boxigo.in/sample-data/";
    const response = await fetch(apiUrl);
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      res.status(500).send("Error: Received unexpected content type");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).send("Error: Unable to fetch data from API");
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
