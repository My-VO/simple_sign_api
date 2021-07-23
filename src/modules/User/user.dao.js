import { Model } from 'sequelize';

class User extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                fullName: DataTypes.STRING,
                email: DataTypes.STRING,
                authCode: DataTypes.STRING,
                role: DataTypes.STRING,
            }, {sequelize, modelName: 'User'}
        );
    }

    static associate(models) {
        return this;
    }
};

export default User;