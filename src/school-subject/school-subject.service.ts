import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {SchoolSubjectDto} from './dto/school-subject.dto';
import {SchoolSubjectInterface} from './interfaces/school-subject.interface';

@Injectable()
export class SchoolSubjectService {
    users: any;

    constructor(
        @Inject('SCHOOL_SUBJECT_MODEL')
        private readonly schoolSubjectService: Model<SchoolSubjectInterface>,
    ) {

    }

    async findAll(): Promise<SchoolSubjectInterface[]> {
        return await this.schoolSubjectService.find().exec();
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findById(id: string): Promise<any> {
        return await this.schoolSubjectService.findById(id).exec();
    }

    async deleteItem(id: string): Promise<any> {
        await this.schoolSubjectService.findByIdAndRemove(id);
        return ({delete: true});
    }

    async updateItem(id: string, updateCourseDto: any): Promise<any> {
        return this.schoolSubjectService.findByIdAndUpdate(id, updateCourseDto);
    }

    async create(createUserDto: SchoolSubjectDto): Promise<SchoolSubjectInterface> {
        return await new this.schoolSubjectService(createUserDto).save();
    }
}
