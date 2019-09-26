module.exports = (sequelize, Sequelize) => {
    class LivraisonDonArticle extends Sequelize.Model {}
    LivraisonDonArticle.init(
        {
            quantite: Sequelize.INTEGER
        }, { sequelize, modelName: 'livraisonDonArticle' }
    );
    return LivraisonDonArticle;
};