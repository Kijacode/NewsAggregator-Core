const express = require("express");
const router = express.Router();
const AutonomousBlog = require("../Blog/AutonomousBlog");

const blogController = require("./Blog.controller");




router.get("/allblogs",blogController.millardAyo,blogController.millardAyoDb,blogController.lemutuz,blogController.lemutuzDb,blogController.itv,blogController.itvDb,blogController.bbcSwahili,blogController.bbcSwahiliDb,(req,res,next) =>{

  res.json({
      millardAyo: req.ayo,
      itv:req.itv_tz,
      bbc: req.bbcblog,
      lemu: req.lemu
  })

});





module.exports = router;