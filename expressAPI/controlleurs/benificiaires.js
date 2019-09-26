var express = require('express');
var router = express.Router();
var db = require('./../db');
var Benificiaires = db.benificiaires;

//GET ALL
router.get("/", (req, res, next) =>
{
    Benificiaires.findAll({include: [{all:true}]}).then(o =>
        {
            res.send(o);
        }).catch(err => {
            res.sendStatus(500);
        });
});

//GET
router.get("/:id", (req, res, next) =>
{
    Benificiaires.findByPk(req.params.id, {include: [{all:true}]}).then(o =>
        {
            res.send(o);
        }).catch(err => {
            res.sendStatus(500);
        });
});

//CREATE
router.post("/", (req, res, next) =>
{
    Benificiaires.create(req.body).then(o => {
        res.send(o);
    }).catch(err => {
        res.sendStatus(500);
    });
});

//UPDATE
router.post("/:id", (req, res, next) =>
{
    Benificiaires.findByPk(req.params.id).then(o =>
        {
            o.update(req.body).then(u => {
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
    Benificiaires.findByPk(req.params.id).then(o => {
        o.destroy().then(u => {
            res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    }).catch(err => {
        res.sendStatus(500);
    });
});

module.exports = router;