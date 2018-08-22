const express = require("express");
const path = require("path");
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 8080;
const root = path.resolve(__dirname);

const serverStarted = () => {
  console.log(`Server started at: http://${host}:${port}`);
  console.log("Press Ctrl+C to exit...\n");
}
  
const app = express();
app.use(express.static(root + '/docs'));
const server = app.listen(port, host, serverStarted);

