const express = require('express');
const router = express.Router();
const shortHash = require('short-hash');

const base_url = 'http://sh.a3.tnpl.me/l/'

const remoceSpace = (text) => {
    return text.replace(/\s/g, '')
}

router.post('/', function(req, res, next) {
    let {url} = req.body
    url = remoceSpace(url)
    if(url){
        let message = { link: base_url+shortHash(url)}
        res.status(200).json(message)
    }
});

module.exports = router;
