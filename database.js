import sequelize from 'sequelize';

const db = new sequelize('heroku_443006bc2f49678', 'b34677034a14be', '0f883936', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
});

export default db;