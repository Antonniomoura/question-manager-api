import * as mongoose from 'mongoose';

export const CoursesSchema = new mongoose.Schema({
    active: {type: Boolean, default: true},
    idUser: {type: String, required: true},
    name: {type: String, required: true},
    duration: {type: String, default: '1'},
    description: {type: String, required: true},
    schoolSubjects: {type: [], default: []},
});
