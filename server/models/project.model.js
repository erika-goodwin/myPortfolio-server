const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  original: { type: String, trim: true, required: true },
  thumbnail: { type: String, trim: true, required: true },
});

const bulletPointSchema = new Schema({
  header: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
});
const projectListSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      minlength: 3,
    },
    LangTag: {
      type: Array,
      trim: true,
      required: true,
    },
    deployedUrl: {
      type: String,
      trim: true,
      required: true,
    },
    githubUrl: {
      type: String,
      trim: true,
      required: true,
    },
    summary: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      minlength: 10,
    },
    image: [imageSchema],
    bulletPoint: [bulletPointSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProjectList", projectListSchema);
