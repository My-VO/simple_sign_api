import UserDao from "./user.dao";

class UserRepository {
    constructor(userDao) {
        this.userDao = userDao;
    }

    async getAll() {
        return await this.userDao.findAll();
    }

    async getByEmail(email) {
        return await this.userDao.findOne({where: {email: email}})
    }

    async register(userData) {
        return await this.userDao.create(userData);
    }
}

export default UserRepository;