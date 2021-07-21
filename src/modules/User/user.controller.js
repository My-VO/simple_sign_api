class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    getAll = async (req, res) => {
        try {
            let users = await this.userService.getAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(400).json(err);
        }
    }
};

export default UserController;