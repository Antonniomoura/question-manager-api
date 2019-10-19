import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {AppService} from './app.service';
import {AppController} from './app.controller';
import {JwtStrategy} from './auth/jwt.strategy';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
