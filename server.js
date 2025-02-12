const express = require("express");
const { configureNginx } = require("do-nginx-app");

const app = express();
const PORT = process.env.PORT || 3000;

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello from Node.js behind Nginx!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // Configure Nginx
  configureNginx({
    domain: "localhost",
    port: PORT,
    ssl: false, // Set to true if you want HTTPS
  })
    .then(() => console.log("Nginx configured successfully!"))
    .catch((err) => console.error("Error configuring Nginx:", err));
});
