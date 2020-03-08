const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: String,
    author: { type: String, required: true },
    puplished: { type: Boolean, default: true },
    puplishedOn: { type: Date, default: Date.now() }
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
