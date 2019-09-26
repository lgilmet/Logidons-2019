module.exports = (sequelize, Sequelize) => {
    class Article extends Sequelize.Model {}
    Article.init(
        {
        nom: Sequelize.STRING
        }, { sequelize, modelName: 'article' }
    );
    return Article;
};