import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    UseInterceptors,
    UploadedFile, UploadedFiles, Res,
} from '@nestjs/common';
import {QuestionsDto} from './dto/questions.dto';
import {QuestionService} from './question.service';
import {QuestionInterface} from './interfaces/question.interface';
import {AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {extname} from 'path';

@Controller('questions')
export class QuestionController {
    SERVER_URL: string = 'http://localhost:3000/';

    constructor(private readonly questionsService: QuestionService) {
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

    @Post()
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
                destination: './avatars',

                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                    return cb(null, `${randomName}${extname(file.originalname)}`);
                },
            }),
        },
        ),
    )
    createUser(@UploadedFile() file, @Body() updateQuestionDto: any) {
        updateQuestionDto.describe = file.filename;
        this.questionsService.create(updateQuestionDto);
    }
}
