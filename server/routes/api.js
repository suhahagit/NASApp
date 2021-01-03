const express = require('express');
const router = express.Router();
const Image = require('../models/Image.js');

router.get('/sanity', function (req, res) {
    res.sendStatus(200);
});

router.get('/images', async function (req, res) {
    try {
        if (req.query.id) {
            const image = await Image.findById(req.query.id);
            res.send(image);
        } else {
            const images = await Image.find({});
            res.send(images);
        }

    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post('/image', async function (req, res) {
    try {
        const image = new Image({ ...req.body });
        await image.save();
        res.send(image);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.delete('/image/:id', async function (req, res) {
    try {
        const image = await Image.findByIdAndRemove({ _id: req.params.id });
        res.send(image);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});



module.exports = router;