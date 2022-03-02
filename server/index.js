require("dotenv").config();
require("express-async-errors");
require("./utils/db");

const express = require("express");
const cors = require("cors");


const app = express();

const path = require("path");
const bodyParser = require("body-parser");

//Route
const projectsRoute = require("./routes/projectsRouter");
const contactRoute = require("./routes/contactRouter.js");

//Middleware
// app.set("views", __dirname + "/client/src/components");
// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(bodyParser.urlencoded({ extended: true }));



//Connection
app.use("/api/projects", projectsRoute);
app.use("/api/contact", contactRoute);


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});
app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

//PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
