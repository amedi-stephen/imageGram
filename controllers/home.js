const Image = require('../models/Image')

const viewModel = {
  images: [
    {
      uniqueId: 1,
      title: "Sample Image 1",
      description: "Beautiful, huh",
      filename: "asoggetti-zlPhxd5OydQ-unsplash.jpg",
      views: 0,
      likes: 0,
      timestamp: Date.now,
    },
    {
      uniqueId: 2,
      title: "Sample Image 2",
      description: "wow! just wow",
      filename: "caspar-camille-rubin-89xuP-XmyrA-unsplash.jpg",
      views: 0,
      likes: 0,
      timestamp: Date.now,
    },
    {
      uniqueId: 3,
      title: "Sample Image 3",
      description: "Beyond the universe",
      filename: "tomas-malik-9XQzqcAr-3I-unsplash.jpg",
      views: 0,
      likes: 0,
      timestamp: Date.now,
    },
  ],
};

exports.renderHomePage = async(req, res) => {
  // res.render("index", viewModel);
  try {
    const images = await Image.find()
  } catch (error) {
    res.render('index', {message: error})
  }
};
