const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model("image", imageSchema);

module.exports = Image;
