import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {QuestionsDto} from './dto/questions.dto';
import {QuestionInterface} from './interfaces/question.interface';

@Injectable()
export class QuestionService {
    users: any;

    constructor(@Inject('QUESTION_MODEL') private readonly questionService: Model<QuestionInterface>) {

    }

    async findAll(): Promise<QuestionInterface[]> {
        return await this.questionService.find().exec();
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findById(id: string): Promise<any> {
        return await this.questionService.findById(id).exec();
    }

    async deleteItem(id: string): Promise<any> {
        await this.questionService.findByIdAndRemove(id);
        return ({delete: true});
    }

    async updateItem(id: string, updateQuestionDto: any): Promise<any> {
        return this.questionService.findByIdAndUpdate(id, updateQuestionDto);
    }
    async create(createUserDto: QuestionsDto): Promise<QuestionInterface> {
        return await new this.questionService(createUserDto).save();
    }
}
