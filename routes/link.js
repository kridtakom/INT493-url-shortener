const express = require('express');
const router = express.Router();
const shortHash = require('short-hash');
const client = require("../config/redis");

const base_url = 'http://sh.a3.tnpl.me/l/'

const remoceSpace = (text) => {
    return text.replace(/\s/g, '')
}

router.post('/', function (req, res, next) {
    let { url } = req.body
    url = remoceSpace(url)
    if (url) {
        let hashUrl = shortHash(url)
        client.get(hashUrl, (err, reply) => {
            if (!err) {
                if (reply) {
                    console.log("==== Form redis ===")
                    let message = { link: base_url + hashUrl }
                    res.status(200).json(message)
                } else {
                    console.log("==== Save redis ====")
                    client.set(hashUrl, url, (err) => {
                        if (!err) {
                            let message = { link: base_url + hashUrl }
                            res.status(200).json(message)
                        } else {
                            console.error(err);
                        }
                    });
                }
            } else {
                console.log("error")
                console.error(err);
            }
        });
    }
});

module.exports = router;
