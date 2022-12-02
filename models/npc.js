import sequelize from 'sequelize';
import db from '../database.js';

const npc = db.define('npc', {
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false,
        longtext: true
    },
    link: {
        type: sequelize.STRING,
        allowNull: false,
    },
    type:{
        type: sequelize.STRING,
        allowNull: false
    }
})

//npc.sync({force: true});

export default npc;