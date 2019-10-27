import { Module } from '@nestjs/common';
import { SchoolSubjectController } from './school-subject.controller';
import { SchoolSubjectService } from './school-subject.service';
import { schoolSubjectProviders } from './school-subject.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SchoolSubjectController],
  providers: [SchoolSubjectService, ...schoolSubjectProviders],
  exports: [SchoolSubjectService],
})
export class SchoolSubjectModule {}
