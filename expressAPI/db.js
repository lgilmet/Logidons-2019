var db = {};

var Sequelize = require('sequelize');
var sequelize = new Sequelize('mytestdb', 'testuser', 'testuser', {
    host: 'localhost',
    dialect: 'mariadb'
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.dons = require('./modeles/don.model')(sequelize, Sequelize);
db.utilisateurs = require('./modeles/utilisateur.model')(sequelize, Sequelize);
db.articles = require('./modeles/article.model')(sequelize, Sequelize);
db.categories = require('./modeles/categorie.model')(sequelize, Sequelize);
db.benificiaires = require('./modeles/benificiaire.model')(sequelize, Sequelize);
db.donArticles = require('./modeles/donArticle.model')(sequelize, Sequelize);
db.livraisons = require('./modeles/livraison.model')(sequelize, Sequelize);
db.livraisonDonArticles = require('./modeles/livraisonDonArticle.model')(sequelize, Sequelize);

db.dons.belongsTo(db.utilisateurs, {as : "Donateur", foreignKey: "idDonateur"});
db.dons.belongsTo(db.utilisateurs, {as : "Responsable", foreignKey: "idResponsable"});
db.utilisateurs.hasMany(db.dons, {as : "Donations", foreignKey: "idDonateur"});
db.utilisateurs.hasMany(db.dons, {as : "DonsAttribues", foreignKey: "idResponsable"});

db.articles.belongsTo(db.categories, {as : "Categorie", foreignKey: "idCategorie"});
db.categories.hasMany(db.articles, {as : "Articles", foreignKey: "idCategorie"});

db.donArticles.belongsTo(db.articles, {as : "Article", foreignKey: "idArticle"});
db.articles.hasMany(db.donArticles, {as : "DonArticles", foreignKey: "idArticle"});

db.donArticles.belongsTo(db.dons, {as : "Don", foreignKey: "idDon"});
db.dons.hasMany(db.donArticles, {as : "DonArticles", foreignKey: "idDon"});

db.livraisonDonArticles.belongsTo(db.donArticles, {as: "DonArticle", foreignKey: "idDonArticle"});
db.donArticles.hasMany(db.livraisonDonArticles, {as: "LivraisonDonsArticles", foreignKey: "idDonArticle"});

db.livraisonDonArticles.belongsTo(db.livraisons, {as : "Livraison", foreignKey: "idLivraison"});
db.livraisons.hasMany(db.livraisonDonArticles, {as: "LivraisonDonArticles", foreignKey: "idLivraison"});

db.livraisons.belongsTo(db.benificiaires, {as : "Benificiaire", foreignKey: "idBenificiaire"});
db.benificiaires.hasMany(db.livraisons, {as : "Livraisons", foreignKey: "idBenificiaire"});

// db.dons.sync();
// db.utilisateurs.sync();
// db.articles.sync();
// db.categories.sync();
// db.benificiaires.sync({force:true});
// db.donArticles.sync({force:true});
// db.livraisons.sync({force:true});
// db.livraisonDonArticles.sync({force:true});

db.sequelize
.authenticate()
.then(() => {
    console.log('Sequelize connection has been established successfully.');
}).catch(err => {
    console.error('Sequelize unable to connect to the database:', err);
});

console.log("Syncing sequelize...");
db.sequelize.sync().then( () => {
    console.log("Sequielize is synced.");
});

module.exports = db;