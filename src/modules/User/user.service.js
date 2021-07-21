class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }

    async getAll() {
        return await this.userRepo.getAll()
    }
};

export default UserService;