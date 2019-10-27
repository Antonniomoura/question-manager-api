import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {AppController} from './app.controller';
import {JwtStrategy} from './auth/jwt.strategy';
import {QuestionModule} from './questions/question.module';
import {AppService} from './app.service';

@Module({
  imports: [UsersModule, AuthModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
