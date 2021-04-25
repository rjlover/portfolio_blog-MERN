const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');
const authentication = require('../middlewares/authenticat');

// router.get('/', (req, res) => {
//     res.send("hello world");
// });


//create register route which is call from client side react-register-route page
//must be [async] function
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ invalid: "Please fill all the data" });
    }
    if (password !== cpassword) {
        return res.status(422).json({ error: "Password and confirm password are not match" })
    }
    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        } else {

            const user = new User({ name, email, phone, work, password });
            await user.save();
            res.status(201).json({ message: "User register successfully" });
        }

    } catch (err) {
        res.status(500).json({ error: "Failed to register" });
        console.log(err);
    }
});




//create login route which is call from client side react-signin-route page.
//must be [async] function.
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ invalid: "please fill all the data" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (isMatch) {
                //generate a new Token
                myToken = await userLogin.generateToken();

                //store the Token in cookies
                res.cookie("jwtoken", myToken, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                });
                return res.status(201).json({ message: "login Successfully" });

            } else {
                return res.status(422).json({ error: "Invaild Login Details" });
            }
        } else {
            return res.status(422).json({ error: "Invaild Login Details" });
        }

    } catch (error) {
        console.log(error);
    }
});


//create contact  route which is call from client side react-contact me-route page.
//must be [async] function.
router.post('/contact', authentication, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(422).json({ error: "Please fill the contact form" });
        }

        const userContact = await User.findOne({ _id: req.userId });

        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({ message: "Message send successfully" })
        } else {
            return res.status(422).json({ invalid: "Please login first!" })
        }
    } catch (error) {
        console.log(error)
    }
});



//create project  route which is call from client side react-project-route page.
//[authentication] - middlewares to check that user is login or not
router.get('/project', authentication, (req, res) => {
    console.log('my project page');
    res.send(req.rootUser);
});

//[authentication] - middlewares to check that user is login or not
//That means this middleware check and continue and fetch the data of user if the token is present in cookies otherwise not.
router.get('/getdata', authentication, (req, res) => {
    res.send(req.rootUser);
});

//create contact  route which is call from client side react-contact me-route page.
router.get('/logout', (req, res) => {

    //delete the token from cookies
    res.clearCookie('jwtoken', { path: "/" });
    res.status(200).json({ info: "User Logout!" })
});



module.exports = router;