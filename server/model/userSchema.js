const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//define the mongo Schema
const mySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    messages: [
        {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});


// define a password hashing function which work or call automatically before the data was save in database
mySchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//define token generate function which call in the login route.
mySchema.methods.generateToken = async function () {
    try {
        let myToken = jwt.sign({ _id: this._id }, process.env.MYSECRET);
        this.tokens = this.tokens.concat({ token: myToken });
        await this.save();
        return myToken;

    } catch (error) {
        console.log(error);
    }
};

//define message send function which is call in contact me route
mySchema.methods.addMessage = async function (name, email, phone, message) {
    try {
        this.messages = this.messages.concat({ name, email, phone, message });
        await this.save();
        return this.messages;

    } catch (error) {
        console.log(error)
    }
};

const User = mongoose.model('USER', mySchema);
module.exports = User;