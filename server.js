const express = require("express");
const mongoose = require("mongoose");

//Reqire Router Files :

const indextRouter = require("./app/routes/index");
const articalsRouter = require("./app/routes/articals");
const db = require("./config/db");

mongoose.connect(db, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("concted to mongo");
});

const app = express();
app.use(express.json());

/* Router  */

//Mount import Router
app.use(indextRouter);
app.use(articalsRouter);

const prot = process.env.Prot || 5000;




app.listen(prot, () => console.log(`blogy is listen on port ${prot}`));
