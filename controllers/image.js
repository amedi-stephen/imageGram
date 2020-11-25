const path = require("path");
const multer = require("multer");
const moment = require("moment");
const Image = require("../models/Image");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/uploads/");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("image");

const viewModel = {
  image: {
    uniqueId: 1,
    title: "Sample Image 1",
    description: "Beautiful, huh",
    filename: "asoggetti-zlPhxd5OydQ-unsplash.jpg",
    views: 0,
    likes: 0,
    timestamp: moment().startOf().fromNow(),
  },
  comments: [
    {
      image_id: 1,
      email: "test@testing.com",
      name: "Test Tester",
      gravatar: "http://lorempixel.com/75/75/animals/1",
      comment: "This is a test comment...",
      timestamp: moment().startOf().fromNow(),
    },
    {
      image_id: 1,
      email: "test@testing.com",
      name: "Test Tester",
      gravatar: "http://lorempixel.com/75/75/animals/2",
      comment: "Another followup comment!",
      timestamp: moment().startOf().fromNow(),
    },
  ],
};

exports.renderImagePage = (req, res) => {
  res.render("image", viewModel);
};

exports.submitImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", { msg: err });
    } else {
      let newDoc = new Image({
        title: req.body.title,
        description: req.body.description,
        filename: req.file.filename,
      });
      try {
        newDoc = newDoc.save();
        res.redirect("/image/:imageId");
      } catch (error) {
        console.log(error);
      }
    }
  });
};

exports.submitComment = (req, res) => {
  res.send("Comment submitted");
};
