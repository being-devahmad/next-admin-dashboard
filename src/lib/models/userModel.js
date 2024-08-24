const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
    },
    address: {
        type: String
    }
},
    { timestamps: true } // createdAt
)

export const User = mongoose.models.users || mongoose.model('User', userSchema)