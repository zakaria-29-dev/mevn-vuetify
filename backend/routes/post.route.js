const express = require('express');
const postRoute = express.Router();

let PostModel = require('../models/Post');

//index
postRoute.route('/').get((req, res) => {
    PostModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


//create post
postRoute.route('/create-post').post((req, res, next) => {
    PostModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//update post
postRoute.route('/update-post/:id').post((req, res, next) => {
        PostModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data)
                console.log('Post updated!')
            }
        })
    })
    // delete post

postRoute.route('/delete-post/:id').delete((req, res, next) => {

    PostModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})
module.exports = postRoute;