const express = require('express');
const router = express.Router();
const client = require("../config/redis");

const remoceSpace = (text) => {
    return text.replace(/\s/g, '')
}

router.get('/:url', (req, res, next) => {
    let hashUrl = req.params.url;
    hashUrl = remoceSpace(hashUrl)
    client.hgetall(hashUrl, (err, reply) => {
        if (!err) {
            if (reply) {
                client.incr(reply.link, (err, visit) => {
                    if (!err) {
                        client.hset(hashUrl, 'link', reply.link, 'visit', visit, (err) => {
                            if (!err) {
                                console.log(reply.link)
                                res.status(302).redirect(reply.link)
                            } else {
                                console.error(err);
                                res.status(500).send(err)
                            }
                        });
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
    client.hgetall(hashUrl, (err, reply) => {
        if (!err) {
            if (reply) {
                try {
                    res.status(200).json({ "visit": reply.visit })
                } catch (e) {
                    res.status(500).send("JSON error from redis")
                }

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
