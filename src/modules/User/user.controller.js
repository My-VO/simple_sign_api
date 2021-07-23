class UserController {
    constructor({userService, jwt, bcrypt}) {
        this.userService = userService;
        this.jwt = jwt;
        this.bcrypt = bcrypt;
    }

    getAll = async (req, res) => {
        const { userRole } = req.currentUser;

        if(userRole !== 'admin') {
            res.status(403).json('Access forbidden')
        } else {
            try {
                let users = await this.userService.getAll();
                res.status(200).json(users);
            } catch (err) {
                res.status(400).json(err);
            }
        }
    };

    login = async (req, res) => {
        let userData = { email: (req.body.email) ? req.body.email : '' };
        let authCode = (req.body.authCode) ? req.body.authCode : '';
        try {
            let user = await this.userService.getByEmail(userData.email);

            if (!user) 
                return res.status(400).json('User not found');

            let checkAuthCode = await this.bcrypt.compareSync(authCode, user.authCode);

            if (checkAuthCode) {
                let token = await this.jwt.generateToken({ id: user.id, role: user.role });
                return res.status(200).json(token);
            } else 
                return res.status(400).json('The authentication code is not right')
            
        } catch (err) {
            res.status(400).json(err)
        }
    };

    register = async (req, res) => {
        const { userRole } = req.currentUser;
        const { email, fullName, role } = req.body;

        if(userRole !== 'admin') {
            res.status(403).json('Access forbidden')
        } else {
            try {
                if (!email || !fullName || !role)
                    res.status(400).json('Missing paraeters')
                else {
                    let userByEmail = await this.userService.getByEmail(email);
                    if (userByEmail)
                        return res.status(409).json('This email address is already registered');
                        
                    const authCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
                    console.log(`authCode`, authCode)
                    const salt = this.bcrypt.genSaltSync(10);
                    const hash = this.bcrypt.hashSync(authCode, salt);
                    
                    let user = await this.userService.register({email, fullName, role, authCode: hash});
                    // await this.mailer.sendMail(user.dataValues, authCode);

                    res.status(200).json('New user registered');
                }
            } catch (err) {
                res.status(400).json('Error server')
            } 
        }    
    }
};

export default UserController;