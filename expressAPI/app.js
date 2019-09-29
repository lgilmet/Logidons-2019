var express = require("express");
var cors = require('cors');
var app = express();
var db = require('./db');
var utilisateurs = require('./controlleurs/utilisateurs');
var dons = require('./controlleurs/dons');
var categories = require('./controlleurs/categories');
var articles = require('./controlleurs/articles');
var benificiaires = require('./controlleurs/benificiaires');
var donArticles = require('./controlleurs/donArticles');
var livraisonDonArticles = require('./controlleurs/livraisonDonArticles');
var livraisons = require('./controlleurs/livraisons');
var settings = require('./settings');

app.use(express.json());
app.use(cors());
app.use('/utilisateurs', utilisateurs);
app.use('/dons', dons);
app.use('/categories', categories);
app.use('/articles', articles);
app.use('/benificiaires', benificiaires);
app.use('/donArticles', donArticles);
app.use('/livraisonDonArticles', livraisonDonArticles);
app.use('/livraisons', livraisons);

app.listen(settings.port, () =>
{
	console.log("Server running on port " + settings.port);
});

module.exports = app;