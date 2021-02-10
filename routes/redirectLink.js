const express = require('express');
const router = express.Router();

const remoceSpace = (text) => {
    return text.replace(/\s/g, '')
}

router.get('/:url', function(req, res, next) {
    const hashUrl = req.params.url;
    hashUrl = remoceSpace(hashUrl)
    res.send(hashUrl);
  });

module.exports = router;
