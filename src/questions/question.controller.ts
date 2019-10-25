import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {QuestionsDto} from './dto/questions.dto';
import {QuestionService} from './question.service';
import {QuestionInterface} from './interfaces/question.interface';

@Controller('questions')
export class QuestionController {
    constructor(private readonly questionsService: QuestionService) {
    }

    @Post()
    async create(@Body() createQuestionDto: QuestionsDto) {
        this.questionsService.create(createQuestionDto);
    }

    @Get()
    async findAll(): Promise<QuestionInterface[]> {
        return this.questionsService.findAll();
    }

    @Get(':id')
    async findByCategory(@Param('id') id: string): Promise<QuestionsDto[]> {
        return this.questionsService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateQuestionDto: QuestionsDto) {
        return this.questionsService.updateItem(id, updateQuestionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.questionsService.deleteItem(id);
    }
}
