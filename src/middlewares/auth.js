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

            const token = authHeader.replace(bearer, '');

            const decoded = await this.jwt.decodeToken(token);

            req.currentUserId = decoded.id;
            next();
        } catch (err) {
            return res.status(401).json('Authentication failed : \n' + err);
        }
    }
}

export default AuthMiddleware;