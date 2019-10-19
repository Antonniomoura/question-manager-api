import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://root:99989888ewqewqe444540@ds139879.mlab.com:39879/question-manager'),
    },
];
