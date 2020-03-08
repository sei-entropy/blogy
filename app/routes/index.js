const express = require("express");
const router = express.Router();
/**
 * Action : INdex
 * Method : Get
 * URT :    /
 * Description :Get the Root Router
 */
router.get("/", (req, res) => {
  res.json({
    message: "Wlecome to Blogy"
  });
});
module.exports = router;
