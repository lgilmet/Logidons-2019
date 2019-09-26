module.exports = (sequelize, Sequelize) => {
    class Categorie extends Sequelize.Model {}
    Categorie.init(
        {
        description: Sequelize.STRING
        }, { sequelize, modelName: 'categorie' }
    );
    return Categorie;
};