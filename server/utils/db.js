const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const connect = mongoose.connect(process.env.MONGODB_URL, {
  dbName: "portfolio",
});

connect
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("db connection err: ", err));
