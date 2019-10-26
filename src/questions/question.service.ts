import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {QuestionsDto} from './dto/questions.dto';
import {QuestionInterface} from './interfaces/question.interface';
import * as sha256 from 'sha256';

@Injectable()
export class QuestionService {
    users: any;

    constructor(@Inject('QUESTION_MODEL') private readonly userModel: Model<QuestionInterface>) {

    }

    async findAll(): Promise<QuestionInterface[]> {
        return await this.userModel.find().exec();
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findById(id: string): Promise<any> {
        return await this.userModel.findById(id).exec();
    }

    async deleteItem(id: string): Promise<any> {
        await this.userModel.findByIdAndRemove(id);
        return ({delete: true});
    }

    async updateItem(id: string, createQuestionDto: QuestionsDto): Promise<any> {
        return this.userModel.findByIdAndUpdate(id, createQuestionDto);
    }
    async create(createUserDto: QuestionsDto): Promise<QuestionInterface> {
        return await new this.userModel(createUserDto).save();
    }
}
