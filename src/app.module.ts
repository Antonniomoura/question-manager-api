import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {AppController} from './app.controller';
import {JwtStrategy} from './auth/jwt.strategy';
import {QuestionModule} from './questions/question.module';
import {AppService} from './app.service';
import {CoursesModule} from './courses/courses.module';
import {SchoolSubjectModule} from './school-subject/school-subject.module';

@Module({
    imports: [
        UsersModule,
        AuthModule,
        QuestionModule,
        CoursesModule,
        SchoolSubjectModule,
    ],
    controllers: [AppController],
    providers: [AppService, JwtStrategy],
})
export class AppModule {
}
