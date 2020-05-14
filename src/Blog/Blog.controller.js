const Blog = require("./BlogModel");

const puppeteer = require("puppeteer");
const cloudinary = require("cloudinary").v2;
const cloudConfig = require("../../config/development");
const express = require("express");
cloudinary.config({

    cloud_name: cloudConfig.cloud_name,
  
    api_key: cloudConfig.api_key,
  
    api_secret: cloudConfig.api_secret
  
  });




module.exports = {




  millardAyo: (req,res,next ) =>{

    //milard
(
    async () => {

        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
        await page.setViewport({width:500,height:700});
        await page.goto("https://millardayo.com/category/top-stories/",{waitUntil :"networkidle2"});
       // await page.click('.widget-home-wrapper',{delay: 100});

        //taking screenshot
        await page.screenshot({
          path: express.static(__dirname + '/assets/ayo.png'),fullPage:false});
        await browser.close();
        
  cloudinary.uploader.upload(
    express.static(__dirname + '/assets/ayo.png'),
  
    function (error, result) {
      console.log(result.url, error);


      req.blogurl = "https://millardayo.com/category/top-stories/";
      req.posturl = result.url;
      next();
    }
  );
    }
)();

  },



  millardAyoDb:async (req,res,next) =>{

  var blog = new Blog({
      blogname:"Millardayo",
      currentPost: { url: req.posturl},
      blog_url: req.blogurl
  });

await blog.save((error,result) =>{
    if(!error)
    {
        req.ayo = result;
        next();
    }
    else{
        next(error);
    }
});
  
  },





  itv: (req,res,next ) =>{
      //itv superbrand
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 500, height: 700 });
    await page.goto("https://www.itv.co.tz/news", { waitUntil: "networkidle2" });
    // await page.click('.widget-home-wrapper',{delay: 100});
    await page.waitForSelector("body > div.layout-center.w100");
    const element = await page.$("body > div.layout-center.w100");
  
    //taking screenshot
    await element.screenshot({
      path:
      express.static(__dirname + '/assets/itv.png'),
      fullPage: false,
      clip: { x: -120, y: -1222, width: 500, height: 900 },
    });
  
    await browser.close();
  
    cloudinary.uploader.upload(
      express.static(__dirname + '/assets/itv.png'),
      
      function (error, result) {
        console.log(result.url, error);

        req.itv_blogurl = "https://www.itv.co.tz/news";
        req.itv_posturl = result.url;
        next();
      }
    );
   
  })();
  
  },


  itvDb :async (req,res,next) =>{

    var blog = new Blog({
        blogname:"ITV -Independent Television",
        currentPost: { url: req.itv_posturl},
        blog_url: req.itv_blogurl
    });
  
  await blog.save((error,result) =>{
      if(!error)
      {
          req.itv_tz = result;
          next();
      }
      else{
          next(error);
      }
  });
    

  },



  bbcSwahili: (req,res,next) =>{

    // //bbc swahili
(
    async () => {

        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
        await page.setViewport({width:500,height:700});
        await page.goto("https://www.bbc.com/swahili",{waitUntil :"networkidle2"});
       // await page.click('.widget-home-wrapper',{delay: 100});
          await page.waitForSelector('#root');
        const element = await page.$("#root");

        //taking screenshot
        await element.screenshot({path: express.static(__dirname + '/assets/bbc.png'),  fullPage:false  ,clip:{x:-120,y:-1222,width:500,height:900} });
              await browser.close();

              
    cloudinary.uploader.upload(
      express.static(__dirname + '/assets/bbc.png'),
        
        function (error, result) {
          console.log(result.url, error);
  
          req.bbc_blogurl = "https://www.bbc.com/swahili";
          req.bbc_posturl = result.url;
          next();
        }
      );
    }
)();
  },



  bbcSwahiliDb :async (req,res,next) =>{
      
    var blog = new Blog({
        blogname:"BBC News Swahili",
        currentPost: { url: req.bbc_posturl},
        blog_url: req.bbc_blogurl
    });
  
  await blog.save((error,result) =>{
      if(!error)
      {
          req.bbcblog = result;
          next();
      }
      else{
          next(error);
      }
  });
    
  },




  lemutuz: (req,res,next ) =>{
    //itv superbrand
(async () => {
   
            const browser = await puppeteer.launch({headless:false});
            const page = await browser.newPage();
            await page.setViewport({width:1200,height:700});
            await page.goto("https://lemutuz.co.tz/",{waitUntil :"networkidle2"});
          //  await page.click('.content-wrap col-md-8r',{delay: 100});
         await page.waitForSelector('#page-content-wrap > div.has-sb.container.bkwrapper.bksection > div > div.content-wrap.col-md-8');
         const element = await page.$("#page-content-wrap > div.has-sb.container.bkwrapper.bksection > div > div.content-wrap.col-md-8");
    
            //taking screenshot
            await element.screenshot({path:
              express.static(__dirname + '/assets/lemutuz.png'),  fullPage:false  ,clip:{x:-120,y:-1222,width:900,height:500} });
            await browser.close();
      

  cloudinary.uploader.upload(
    express.static(__dirname + '/assets/lemutuz.png'),
    
    function (error, result) {
      console.log(result.url, error);

      req.lemutuz_blogurl = "https://lemutuz.co.tz/";
      req.lemutuz_posturl = result.url;
      next();
    }
  );
 
})();

},


lemutuzDb :async (req,res,next) =>{

  var blog = new Blog({
      blogname:"Lemutuz Blog",
      currentPost: { url: req.lemutuz_posturl},
      blog_url: req.lemutuz_blogurl
  });

await blog.save((error,result) =>{
    if(!error)
    {
        req.lemu = result;
        next();
    }
    else{
        next(error);
    }
});
  

},
















}