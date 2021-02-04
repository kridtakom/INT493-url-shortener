const express = require("express");
const router = express.Router();
const Url = require("../models/Url");
const cryptoRandomString = require("crypto-random-string");

router.get("/:url", (request, response) => {
  const short_url = request.params.url;
  try {
     Url.findOne({ short_url: short_url }).exec((err, url) => {
    if (err) return response.status(400).send(err);
    response.redirect(url.full_url);
  });
  } catch (err) {
    console.log(err)
  } 
});

router.post("/shortUrls", async (request, response) => {
  const { full_url } = request.body;
  try {
    const url = await Url.findOne({ full_url: full_url });
    let dataRes = { short_url: "", full_url: "" };
    if (url) {
      dataRes.short_url = url.short_url;
      dataRes.full_url = url.full_url;
    } else {
      const new_url = await Url.create({
        full_url: full_url,
        short_url: cryptoRandomString({ length: 6, type: "alphanumeric" }),
      });
      dataRes.full_url = new_url.full_url;
      dataRes.short_url = new_url.short_url;
    }
    response.json({
      full_url: dataRes.full_url,
      short_url: `localhost:5000/${dataRes.short_url}`,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
