module.exports = (sequelize, Sequelize) => {
    class Don extends Sequelize.Model {}
    Don.init(
        {
        datePromesse: Sequelize.DATE,
        dateReception: Sequelize.DATE,
        dateAccepter: Sequelize.DATE,
        etat: Sequelize.STRING,
        }, { sequelize, modelName: 'don' }
    );
    return Don;
};