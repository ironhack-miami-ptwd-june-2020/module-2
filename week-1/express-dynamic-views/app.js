// ================= Imports ====================

const express = require("express");
const hbs = require("hbs");

const app = express();

// ==============================================

// ================= MiddleWare =================

app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// ==============================================

// ================== Routes ====================

app.use("/home", require("./routes/index"));
app.use("/random", require("./routes/random/random-routes"));

// ==============================================

app.listen(3000, () => console.log("Listening on port 3000"));
