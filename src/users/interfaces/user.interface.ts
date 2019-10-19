import {Document} from 'mongoose';

export interface UserInterface extends Document {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    roles?: string[];
    active?: boolean;
    imageUrl?: string;
}
