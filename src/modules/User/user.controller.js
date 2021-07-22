class UserController {
    constructor({userService, jwt, bcrypt}) {
        this.userService = userService;
        this.jwt = jwt;
        this.bcrypt = bcrypt;
    }

    getAll = async (req, res) => {
        try {
            let users = await this.userService.getAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    login = async (req, res) => {
        let userData = { email: (req.body.email) ? req.body.email : '' };
        let authCode = (req.body.authCode) ? req.body.authCode : '';
        try {
            let user = await this.userService.getByEmail(userData.email);

            if (!user) 
                return res.status(400).json('User not found');

            let checkAuthCode = await this.bcrypt.compareSync(authCode, user.authCode);    

            if (checkAuthCode) {
                let token = await this.jwt.generateToken({ id: user.id });
                return res.status(200).json(token);
            } else 
                return res.status(400).json('The authentication code is not right')
            
        } catch (err) {
            res.status(400).json(err)
        }
    }
};

export default UserController;