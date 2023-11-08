// Get 3rd Party modules
const express = require("express");
// Get Custom built modules
const fm = require("./filemgr");

// Create the express http server
const app = express();

// Define some built-in middleware
app.use(express.static("./Client"));
app.use(express.json());

/**
 * The server returns get requests as a stringified json object.
 */
app.get("/api", async (req,res) => {

  res.json(await fm.ReadData());
});

/**
 * The post function uses the file manager object to store a stringified variation of the requested object.
 */
app.post("/api", async (req,res) => {

  await fm.WriteData(JSON.stringify(req.body));
});

// page not found route
app.all("*", (req,res) => {
  res.status(404).send("<h1>Page Not Found...</h1>");
});

// Create a server
const appName = "Simple List";
const port = 5000;
app.listen(port, () => {
  console.log(`App ${appName} is running on port ${port}`);
})