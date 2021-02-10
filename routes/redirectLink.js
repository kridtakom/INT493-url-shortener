const express = require('express');
const router = express.Router();
const client = require("../config/redis");

const remoceSpace = (text) => {
    return text.replace(/\s/g, '')
}

router.get('/:url', function (req, res, next) {
    let hashUrl = req.params.url;
    hashUrl = remoceSpace(hashUrl)
    client.get(hashUrl, (err, reply) => {
        if (!err) {
            if (reply) {
                console.log("==== Found Form redis ===")
                res.status(302).redirect(reply)
            } else {
                console.log("==== Not Found redis ====")
                res.status(400).send("Not Found URL")
            }
        } else {
            console.log("error")
            console.error(err);
        }
    });
});

module.exports = router;
