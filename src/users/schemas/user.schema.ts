import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roles: {type: [], default: ['PERSON_WRITE']},
    active: {type: Boolean, default: true},
    imageUrl: String,
});
