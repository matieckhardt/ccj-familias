const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let userSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'El nombre es necesario'],
    },
    userMail: {
        type: String,
        unique: true,
        required: [true, "El correo es necesario"],
    },
    userPassword: {
        type: String,
        required: [true, "Le contraseña es obligatoria"],
    },
    userAvatar: String,
    userImage: String,

    });

    // elimina la key password del objeto que retorna al momento de crear un usuario
    
userSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.userPassword;
    return userObject;
 }

userSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})
module.exports = mongoose.model('User', userSchema)