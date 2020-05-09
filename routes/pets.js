const express = require("express");
const router = express.Router();

router.get("/", veryToken, (req, res) => {
  
      res.status(200).json({
        message: 'Section to pets',
      });
   
});



module.exports = router;
