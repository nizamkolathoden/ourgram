const express = require('express');
const router = express.Router();
//midlle ware for authontication
const requirelogin = require("./../middleware/requirelogin");
//models
const User = require("./../models/user");

//@route put settings/editname
//@desc for edting name
router.put('/editname', requirelogin, (req, res) => {
    const { _id, name } = req.body;
    if (!_id) return res.status(401).json({ error: 'user not found' });
    User.findByIdAndUpdate(_id, {
        name
    }).then(data => {
        res.json(data)
    }).catch(e => {
        console.log('error in editng name', e);
    })
})

//@route put settings/public
//@desc for change your account type
router.put('/public', requirelogin, (req, res) => {
    const { _id, public } = req.body;
    if (!_id) return res.status(401).json({ error: 'user not found' });
    User.findByIdAndUpdate(_id, {
        public
    }).then(data => {
        res.json(data)
    }).catch(e => {
        console.log('error in editng name', e);
    })
})
//@route get settings/editname
//@desc for edting name
router.get("/editname", (req, res) => {
    const { _id } = req.body;

    console.log(_id);
    if (!_id) return res.status(401).json({ error: "User Not found" });
    User.findOne({ _id: req.body._id })
        .then(data => {
            res.json(data)
        }).catch(e => {
            console.log('error in  get name', e);
        })
})

module.exports = router;