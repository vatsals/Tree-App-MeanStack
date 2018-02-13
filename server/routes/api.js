const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://vatsal:vatsal2126@ds231758.mlab.com:31758/treeapp";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({}).sort({level: 1})
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving tree values");
        }else {
            res.json(videos);
        }
    });
});

router.get('/videos0', function(req, res){
    console.log('Get request for all videos');
    Video.find({level: "0"})
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving tree values");
        }else {
            res.json(videos);
        }
    });
});

router.get('/videos1', function(req, res){
    console.log('Get request for all videos');
    Video.find({level: "1"})
    .exec(function(err, videos2){
        if (err){
            console.log("Error retrieving tree values");
        }else {
            res.json(videos2);
        }
    });
});

router.get('/videos2', function(req, res){
    console.log('Get request for all videos');
    Video.find({level: "2"})
    .exec(function(err, videos3){
        if (err){
            console.log("Error retrieving tree values");
        }else {
            res.json(videos3);
        }
    });
});

router.get('/videos/:id', function(req, res){
    console.log('Get request for a single video');
    Video.findById(req.params.id)
    .exec(function(err, video){
        if (err){
            console.log("Error retrieving video");
        }else {
            res.json(video);
        }
    });
});

router.post('/video', function(req, res){
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.parent1 = req.body.parent1;
    newVideo.parent2 = req.body.parent2;
    newVideo.level = req.body.level;
    newVideo.save(function(err, insertedVideo){
        if (err){
            console.log('Error saving video');
        }else{
            res.json(insertedVideo);
        }
    });
});


router.put('/video/:id', function(req, res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, parent1: req.body.parent1, parent2: req.body.parent2, level: req.body.level}
    },
    {
        new: true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    }

    );
});


router.delete('/video/:id', function(req, res){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting video");
        }else{
            res.json(deletedVideo);
        }
    });
});

module.exports = router;