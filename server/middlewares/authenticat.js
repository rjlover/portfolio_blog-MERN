const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const authentication = async (req, res, next) => {
    try {
        //First check that Any token is present in cookies and after that verify  that token.
        const validToken = req.cookies.jwtoken;
        const verifyToken = jwt.verify(validToken, process.env.MYSECRET);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": validToken });
        // console.log(rootUser)

        if (!rootUser) {
            throw new Error("user not found");
        }
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        // req.token = validToken;

        next();

    } catch (error) {
        res.status(401).json({ error: "Unauthorized! need to login first" })
    }
}

module.exports = authentication;