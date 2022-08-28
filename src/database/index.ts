import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'onebitflix',
    username: 'root',
    password: '1234',
    define:{
        underscored: true
    }

})