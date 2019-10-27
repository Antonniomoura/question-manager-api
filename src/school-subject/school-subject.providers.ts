import {Connection} from 'mongoose';
import {SchoolSubjectSchema} from './schemas/school-subject.schema';

export const schoolSubjectProviders = [
    {
        provide: 'SCHOOL_SUBJECT_MODEL',
        useFactory: (connection: Connection) => connection.model('SchoolSubject', SchoolSubjectSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
