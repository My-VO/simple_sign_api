class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }

    async getAll() {
        return await this.userRepo.getAll()
    }

    async getByEmail(email) {
        return await this.userRepo.getByEmail(email);
    }
};

export default UserService;