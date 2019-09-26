module.exports = (sequelize, Sequelize) => {
    class Livraison extends Sequelize.Model {}
    Livraison.init(
        {
            dateLivraison: Sequelize.DATE
        }, { sequelize, modelName: 'livraison' }
    );
    return Livraison;
};