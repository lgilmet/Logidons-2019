module.exports = (sequelize, Sequelize) => {
    class Utilisateur extends Sequelize.Model {}
    Utilisateur.init(
        {
        type: Sequelize.STRING,
        nom: Sequelize.STRING,
        prenom: Sequelize.STRING,
        telephoneTravail: Sequelize.STRING,
        telephoneMaison: Sequelize.STRING,
        telephoneMobile: Sequelize.STRING,
        salaire: Sequelize.DECIMAL,
        adresse: Sequelize.STRING,
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING
        }, { sequelize, modelName: 'utilisateur' }
    );

    return Utilisateur;
}