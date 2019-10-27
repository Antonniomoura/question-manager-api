import {Document} from 'mongoose';

export interface SchoolSubjectInterface extends Document {
    idUser: string;
    name: string;
    description: string;
    active: boolean;
}
