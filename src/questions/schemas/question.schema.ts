import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
    active: {type: Boolean, default: true},
    idUser: {type: String, required: true},
    inRevision: Boolean,
    title: {type: String, required: true},
    status: {type: String, default: 'IN_REVISION'},
    approved: Boolean,
    idCourse: [],
    describe: {type: String},
    schoolSubject: {type: String, required: true},
    alternatives: {type: [], required: true},
    imgs: [String],
    correct: {type: Number, default: 1},
});
