class AuthMiddleware {
    constructor(jwt) {
        this.jwt = jwt;
    }

    authenticate = async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            const bearer = 'Bearer';

            if (!authHeader || !authHeader.startsWith(bearer)) {
                return res.status(401).json('Access denied. No credentials sent');
            }

            // const token = authHeader.replace(bearer, '');
            const token = authHeader.split(' ')[1];

            const decoded = await this.jwt.decodeToken(token);

            req.currentUser = {userId: decoded.userId, userRole: decoded.userRole};
            next();
        } catch (err) {
            return res.status(401).json('Authentication failed : ' + err);
        }
    }
}

export default AuthMiddleware;