const mongoose = require('mongoose');

const { Schema } = mongoose;

const Role = {
    ADMIN: 'ADMIN',
    USER: 'USER',
}

const Profile = {
    ASSOCIATEMANAGER: 'ASSOCIATEMANAGER',
    COMMERCIAL: 'COMMERCIAL',
    PROJECTMANAGERMANAGER: 'PROJECTMANAGERMANAGER',
    CUSTOMER: 'CUSTOMER',
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    },
  password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    minlength: [6, 'Minimum password length must be 6 characters'],
  },
  role: {
    type: String,
    enum: Role,
    default: Role.USER,
  },
  profil: {
    type: String,
    enum: Profile,
    default: Profile.CUSTOMER,
  },
  responsable: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  }
});

const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;
