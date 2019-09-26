module.exports = (sequelize, Sequelize) => {
    class DonArticle extends Sequelize.Model {}
    DonArticle.init(
        {
            valeur: Sequelize.INTEGER,
            quantite: Sequelize.INTEGER,
            description: Sequelize.STRING
        }, { sequelize, modelName: 'donArticle' }
    );
    return DonArticle;
};