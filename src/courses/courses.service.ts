import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {CoursesDto} from './dto/courses.dto';
import {CoursesInterface} from './interfaces/courses.interface';

@Injectable()
export class CoursesService {
    users: any;

    constructor(
        @Inject('COURSE_MODEL')
        private readonly coursesService: Model<CoursesInterface>,
    ) {

    }

    async findAll(): Promise<CoursesInterface[]> {
        return await this.coursesService.find().exec();
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findById(id: string): Promise<any> {
        return await this.coursesService.findById(id).exec();
    }

    async deleteItem(id: string): Promise<any> {
        await this.coursesService.findByIdAndRemove(id);
        return ({delete: true});
    }

    async updateItem(id: string, updateCourseDto: any): Promise<any> {
        return this.coursesService.findByIdAndUpdate(id, updateCourseDto);
    }

    async create(createUserDto: CoursesDto): Promise<CoursesInterface> {
        return await new this.coursesService(createUserDto).save();
    }
}
