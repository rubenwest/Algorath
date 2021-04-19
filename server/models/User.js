const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = Schema ({
    name: String,
    rol: {
        type: String,
        default: "User",
        required: true
    },
    department: {
        type: String,
        default: "Blockchain",
        required: true
    } 
},{
    timestamps: true
})

module.exports = mongoose.model('Users', UserSchema)
