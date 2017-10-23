let express = require ('express');

const User = require('../../model/groupChat');

const router = express.Router();

/* GET index page. */
module.exports = (req, res) => {
  const oUser = new User({
    chat_type: req.body.type,
    room: req.body.room,
    conversation: [{
      name: req.body.userName,
      message: req.body.message,
      timestamp: Date.now()
    }]
  });


  oUser.save((err, result) => {
    if (err) {
      res.status(404).json({
        err_code: 1,
        success: false,
        message: 'Something went wrong with the saving the data',
        error: err
      });
    }
    res.status(201).json({
      err_code: 0,
      success: true,
      message: 'Data Saved Successfully.',
      data: result
    });
  });
}


