const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const blogSchema = new mongoose.Schema({
  blogname: {
    type: String,
    unique: true,
    required: true,
  },

  currentPost: {
    deleted: {
      type: Boolean,
      default: true,
    },

    url: {
      type: String,
      required: true,
    },
  },

  blog_url: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});


var blog = mongoose.model("Blogs",blogSchema);

module.exports = blog;