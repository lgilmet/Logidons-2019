var express = require('express');
var router = express.Router();
var db = require('./../db');
var Don = db.dons;

router.post("/login", (req, res, next) => {
    Don.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(user => {
        if(!user)
            res.sendStatus(500);
        else
            res.send(user);
    })
});

//GET ALL
router.get("/", (req, res, next) =>
{
    Don.findAll({include: [{all:true}]}).then(users =>
        {
            res.send(users);
        }).catch(err => {
            res.sendStatus(500);
        });
});

//GET
router.get("/:id", (req, res, next) =>
{
    Don.findByPk(req.params.id, {include: [{all:true}]}).then(user =>
        {
            res.send(user);
        }).catch(err => {
            res.sendStatus(500);
        });
});

//CREATE
router.post("/", (req, res, next) =>
{
    Don.create(req.body).then(u => {
        res.send(u);
    }).catch(err => {
        res.sendStatus(500);
    });
});

//UPDATE
router.post("/:id", (req, res, next) =>
{
    Don.findByPk(req.params.id).then(user =>
        {
            user.update(req.body).then(u => {
                res.send(u);
            }).catch(err => {
                res.sendStatus(500);
            });
        }).catch(err => {
            res.sendStatus(500);
        });
});

//DELETE
router.delete("/:id", (req, res, next) =>
{
    Don.findByPk(req.params.id).then(user => {
        user.destroy().then(u => {
            res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    }).catch(err => {
        res.sendStatus(500);
    });
});

module.exports = router;