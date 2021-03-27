const express = require('express');
const router = express.Router();
const client = require("../config/redis");

const remoceSpace = (text) => {
    return text.replace(/\s/g, '')
}

router.get('/:url', (req, res, next) => {
    let hashUrl = req.params.url;
    hashUrl = remoceSpace(hashUrl)
    client.hget(hashUrl, 'link', (err, link) => {
        if (!err) {
            if (link) {
                client.hincrby(hashUrl, 'visit', 1, (err) => {
                    if (!err) {
                        res.status(302).redirect(link)
                    } else {
                        console.error(err);
                        res.status(500).send(err)
                    }
                });
            } else {
                console.log("==== Not Found redis ====")
                res.status(400).send("Not Found URL")
            }
        } else {
            console.log("error")
            console.error(err);
            res.status(500).send(err)
        }
    });
});

router.get('/:url/stats', (req, res, next) => {
    let hashUrl = req.params.url;
    hashUrl = remoceSpace(hashUrl)
    client.hget(hashUrl, 'visit', (err, visit) => {
        if (!err) {
            if (visit) {
                res.status(200).json({ "visit": parseInt(visit) })
            } else {
                console.log("==== Not Found redis ====")
                res.status(400).send("Not Found URL")
            }
        } else {
            console.log("error")
            console.error(err);
            res.status(500).send(err)
        }
    });
});

module.exports = router;
