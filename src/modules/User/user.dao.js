import { Model } from 'sequelize';

class UserDao extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                fullName: DataTypes.STRING,
                email: DataTypes.STRING,
                authCode: DataTypes.INTEGER,
            }, {sequelize, modelName: 'User'}
        );
    }

    static associate(models) {
        return this;
    }
};

export default UserDao;