import UserDao from "./user.dao";

class UserRepository {
    constructor(userDao) {
        this.userDao = UserDao;
    }

    async getAll() {
        return await this.userDao.findAll();
    }
}

export default UserRepository;