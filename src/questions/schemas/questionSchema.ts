import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
    active: {type: Boolean, default: true},
    idUser: String,
    inRevision: Boolean,
    title: String,
    status: String,
    approved: Boolean,
    idCourse: String,
    describe: String,
    schoolSubject: String,
    alternatives: [],
});
