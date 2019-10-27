import {Document} from 'mongoose';

export interface QuestionInterface extends Document {
    id?: string;
    idUser: string;
    inRevision: boolean;
    title: string;
    status: string;
    approved: boolean;
    imgs: string[];
    correct: number;
    active: boolean;
    idCourses: string[];
    describe: string;
    schoolSubject: string;
    alternatives: [];
}
