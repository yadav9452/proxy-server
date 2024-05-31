import express from "express";
import handler from "./api/api.mjs";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/proxy", handler);

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
