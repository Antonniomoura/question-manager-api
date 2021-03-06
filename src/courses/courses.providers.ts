import {Connection} from 'mongoose';
import {CoursesSchema} from './schemas/courses.schema';

export const coursesProviders = [
    {
        provide: 'COURSE_MODEL',
        useFactory: (connection: Connection) => connection.model('Courses', CoursesSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
