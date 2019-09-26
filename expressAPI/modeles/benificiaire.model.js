module.exports = (sequelize, Sequelize) => {
    class Benificiaire extends Sequelize.Model {}
    Benificiaire.init(
        {
            nom: Sequelize.STRING,
            sexe: Sequelize.STRING,
            dateDeNaissance: Sequelize.DATE,
            situation: Sequelize.STRING,
            adresse: Sequelize.STRING,
            telephone: Sequelize.STRING,
            email: Sequelize.STRING
        }, { sequelize, modelName: 'benificiaire' }
    );
    return Benificiaire;
};