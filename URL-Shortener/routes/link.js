const express = require('express')
const router = express.Router()
const shortHash = require('short-hash')
const client = require('../config/redis')

const base_url = process.env.BASE_URL

const remoceSpace = text => {
    return text.replace(/\s/g, '')
}

const verifyUrl = text => {
    return /^(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))$/.test(
        text
    )
}

router.post('/', (req, res, next) => {
    let { url } = req.body
    if (url) {
        url = remoceSpace(url)
        if (verifyUrl(url)) {
            let hashUrl = shortHash(url)
            //  ======== Don't check short link from redis ========
            client.hset(hashUrl, 'link', url, 'visit', 0, err => {
                if (!err) {
                    let message = { link: base_url + hashUrl }
                    res.status(200).json(message)
                } else {
                    console.error(err)
                    res.status(500).send(err)
                }
            })
            //  ======== Check  link from redis ========
            // client.hget(hashUrl, 'link', (err, reply) => {
            //     if (!err) {
            //         if (reply) {
            //             console.log("==== Form redis ===")
            //             let message = { link: base_url + hashUrl }
            //             res.status(200).json(message)
            //         } else {
            //             console.log("==== Save redis ====")
            //             client.hset(hashUrl, 'link', url, 'visit', 0, (err) => {
            //                 if (!err) {
            //                     let message = { link: base_url + hashUrl }
            //                     res.status(200).json(message)
            //                 } else {
            //                     console.error(err);
            //                     res.status(500).send(err)
            //                 }
            //             });
            //         }
            //     } else {
            //         console.log("error")
            //         console.error(err);
            //         res.status(500).send(err)
            //     }
            // });
        } else {
            res.status(400).send('Must be URL')
        }
    } else {
        res.status(400).send('Invalid Format')
    }
})

module.exports = router
