var express = require('express');
var router = express.Router();
var db = require('./../db');
var Don = db.dons;

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

//GET EMPLOYE's
router.get("/employe/:id", (req, res, next) => 
{
    Don.findAll({
        where: {
            idResponsable : req.params.id
        }, include: [{all:true}]
    }).then(dons => {
            res.send(dons);
    });
})

//GET DONATEUR's
router.get("/donateur/:id", (req, res, next) => 
{
    Don.findAll({
<<<<<<< HEAD
        where: {
            idDonateur : req.params.id
        }, include: [{all:true}]
    }).then(dons => {
=======
        include: [{all:true}],
        where: { idDonateur : req.params.id}}
    ).then(dons => {
>>>>>>> 2524be5ae235cc2399593596241e081f5d8c4063
            res.send(dons);
    });
})

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