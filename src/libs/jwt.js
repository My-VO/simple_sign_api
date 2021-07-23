class JwtService {
    constructor(jwt, secret) {
        this.jwt = jwt;
        this.secret = secret;
    }

    async decodeToken(token) {
        const jwtVerify = await this.jwt.verify(token, this.secret, (err, verifiedJwt) => {
            if(err) {
                console.log(`err`, err)
            } else {
                return verifiedJwt
            }
        });
        return jwtVerify
    }

    async generateToken({id, role}) {
        return await this.jwt.sign(
            {
                userId: id,
                userRole: role
            }, this.secret);
    }
};

export default JwtService;