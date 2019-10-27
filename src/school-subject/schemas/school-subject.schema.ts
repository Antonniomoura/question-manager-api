import * as mongoose from 'mongoose';

export const SchoolSubjectSchema = new mongoose.Schema({
    idUser: {type: String, required: true},
    name: {type: String, required: true},
    active: {type: Boolean, default: true},
    description: {type: String, required: true},
});
