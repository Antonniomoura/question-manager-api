import {Document} from 'mongoose';

export interface CoursesInterface extends Document {
    idUser: string;
    name: string;
    active: boolean;
    duration: string;
    description: string;
    schoolSubjects: string[];
}
