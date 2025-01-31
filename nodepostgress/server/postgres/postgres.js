import { Sequelize } from 'sequelize';
import { createUserModel } from '../model/userSchema.js';

const sequelize = new Sequelize('my_data', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
});

let UserModel = null;
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel = await createUserModel(sequelize)
        await sequelize.sync()
        console.log('User has been created successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
export {
    connection,
    UserModel
}