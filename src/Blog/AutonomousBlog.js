const Blog = require("./BlogModel");

const puppeteer = require("puppeteer");
const cloudinary = require("cloudinary").v2;
const cloudConfig = require("../../config/development");


const uploadOption = {};
cloudinary.config({
  cloud_name: cloudConfig.cloud_name,

  api_key: cloudConfig.api_key,

  api_secret: cloudConfig.api_secret,
});

module.exports = {
  millardAyo: (req, res, next) => {
    //milard
    console.log("in");
    (async () =>{

      const browser = await puppeteer.launch({
        
        args : [
          '--no-sandbox',
          // '--disable-setuid-sandbox'
        ],
        headless:true});
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
      await page.setViewport({width:500,height:700});
      await page.goto("https://millardayo.com/category/top-stories/",{waitUntil :"networkidle2"});
     // await page.click('.widget-home-wrapper',{delay: 100});

      //taking screenshot
      const screenshotBuffer =    await page.screenshot({
        encoding: 'binary'});
      await browser.close();
     
cloudinary.uploader.upload_stream(
  uploadOption,

  function (error, result) {
    console.log(result.url, error);


    req.blogurl = "https://millardayo.com/category/top-stories/";
    req.posturl = result.url;
    next();
  }
).end(screenshotBuffer);
  })().catch((err) =>{
      console.log("Error is: "+ err)
    });
  },

  millardAyoDb: async (req, res, next) => {
    Blog.findOne({ blogname: "Millardayo" }).then((result) => {
      console.log("inm");
      if (result.currentPost.url == req.posturl) {
        next();
      } else {
        Blog.findOneAndUpdate(
          { blogname: "Millardayo" },

          { $set: { currentPost: { url: req.posturl } } },
          { new: true },
          (err, result) => {
            if (!err) {
              console.log(result);
              next();
            } else {
              next(err);
            }
          }
        );
      }
    });
  },

  itv: (req, res, next) => {
    //itv superbrand
    (async () => {
      const browser = await puppeteer.launch({ 
        args : [
          '--no-sandbox',
          // '--disable-setuid-sandbox'
        ],
        headless: true });
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
      await page.setViewport({ width: 500, height: 700 });
      await page.goto("https://www.itv.co.tz/news", {
        waitUntil: "networkidle2",
      });
      // await page.click('.widget-home-wrapper',{delay: 100});
      await page.waitForSelector("body > div.layout-center.w100");
      const element = await page.$("body > div.layout-center.w100");

      //taking screenshot
      const screenshotBuffer  = await element.screenshot({
        encoding:'binary',
        fullPage: false,
        clip: { x: -120, y: -1222, width: 500, height: 900 },
      });

      await browser.close();

      cloudinary.uploader.upload_stream(
        uploadOption,

        function (error, result) {
          console.log(result.url, error);

          req.itv_blogurl = "https://www.itv.co.tz/news";
          req.itv_posturl = result.url;
          next();
        }
      ).end(screenshotBuffer);
    })().catch((err) =>{
      console.log("Error is: "+ err)
    });
  },

  itvDb: async (req, res, next) => {
    Blog.findOne({ blogname: "Millardayo" }).then((result) => {
      if (result.currentPost.url == req.posturl) {
        next();
      } else {
        Blog.findOneAndUpdate(
          { blogname: "ITV -Independent Television" },

          { $set: { currentPost: { url: req.itv_posturl } } },
          { new: true },
          (err, result) => {
            if (!err) {
              console.log(result);
              next();
            } else {
              next(err);
            }
          }
        );
      }
    });
  },

  bbcSwahili: (req, res, next) => {
    // //bbc swahili
    (async () => {
      const browser = await puppeteer.launch({
        args : [
          '--no-sandbox',
          // '--disable-setuid-sandbox'
        ],
        headless: true });
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
      await page.setViewport({ width: 500, height: 1000 });
      await page.goto("https://www.bbc.com/swahili", {
        waitUntil: "networkidle2",
      });
      // await page.click('.widget-home-wrapper',{delay: 100});
      await page.waitForSelector("#root");
      const element = await page.$("#root");

      //taking screenshot
      const screenshotBuffer  = await element.screenshot({
       encoding: 'binary',
        fullPage: false,
        clip: { x: -120, y: -1222, width: 500, height: 1000 },
      });
      await browser.close();

      cloudinary.uploader.upload_stream(
        uploadOption,

        function (error, result) {
          console.log(result.url, error);

          req.bbc_blogurl = "https://www.bbc.com/swahili";
          req.bbc_posturl = result.url;
          next();
        }
      ).end(screenshotBuffer);
    })().catch((err) =>{
      console.log("Error is: "+ err)
    });
  },

  bbcSwahiliDb: async (req, res, next) => {
    Blog.findOne({ blogname: "Millardayo" }).then((result) => {
      if (result.currentPost.url == req.posturl) {
        next();
      } else {
        Blog.findOneAndUpdate(
          { blogname: "BBC News Swahili" },

          { $set: { currentPost: { url: req.bbc_posturl } } },
          { new: true },
          (err, result) => {
            if (!err) {
              console.log(result);
              next();
            } else {
              next(err);
            }
          }
        );
      }
    });
  },

  lemutuz: (req, res, next) => {
    //itv superbrand
    (async () => {
      const browser = await puppeteer.launch({ 
        args : [
          '--no-sandbox',
          // '--disable-setuid-sandbox'
        ],
        headless: true });
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
      await page.setViewport({ width: 1200, height: 700 });
      await page.goto("https://lemutuz.co.tz/", { waitUntil: "networkidle2" });
      //  await page.click('.content-wrap col-md-8r',{delay: 100});
      await page.waitForSelector(
        "#page-content-wrap > div.has-sb.container.bkwrapper.bksection > div > div.content-wrap.col-md-8"
      );
      const element = await page.$(
        "#page-content-wrap > div.has-sb.container.bkwrapper.bksection > div > div.content-wrap.col-md-8"
      );

      //taking screenshot
      const screenshotBuffer =    await element.screenshot({
      encoding: "binary",
        fullPage: false,
        clip: { x: -120, y: -1222, width: 900, height: 500 },
      });
      await browser.close();

      cloudinary.uploader.upload_stream(
      uploadOption,

        function (error, result) {
          console.log(result.url, error);

          req.lemutuz_blogurl = "https://lemutuz.co.tz/";
          req.lemutuz_posturl = result.url;
          next();
        }
      ).end(screenshotBuffer);
    })().catch((err) =>{
      console.log("Error is: "+ err)
    });
  },

  lemutuzDb: async (req, res, next) => {
    Blog.findOne({ blogname: "Millardayo" }).then((result) => {
      if (result.currentPost.url == req.posturl) {
        next();
      } else {
        Blog.findOneAndUpdate(
          { blogname: "Lemutuz Blog" },

          { $set: { currentPost: { url: req.lemutuz_posturl } } },
          { new: true },
          (err, result) => {
            if (!err) {
              console.log(result);
              next();
            } else {
              next(err);
            }
          }
        );
      }
    });
  },
};
