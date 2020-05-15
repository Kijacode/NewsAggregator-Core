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



router.get("/blogchecks",AutonomousBlog.bbcSwahili,AutonomousBlog.bbcSwahiliDb,AutonomousBlog.millardAyo,AutonomousBlog.millardAyoDb,AutonomousBlog.lemutuz,AutonomousBlog.lemutuzDb,AutonomousBlog.itv,AutonomousBlog.itvDb,(req,res,next) =>{
  console.log("hello kijacode");
  return null;
  });





module.exports = router;