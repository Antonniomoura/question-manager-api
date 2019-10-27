import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
} from '@nestjs/common';
import {SchoolSubjectDto} from './dto/school-subject.dto';
import {SchoolSubjectService} from './school-subject.service';
import {SchoolSubjectInterface} from './interfaces/school-subject.interface';

@Controller('school-subject')
export class SchoolSubjectController {
    constructor(
        private readonly schoolSubjectService: SchoolSubjectService,
    ) {
    }

    @Get()
    async findAll(): Promise<SchoolSubjectInterface[]> {
        return this.schoolSubjectService.findAll();
    }

    @Get(':id')
    async findByCategory(@Param('id') id: string): Promise<SchoolSubjectDto[]> {
        return this.schoolSubjectService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: any) {
        return this.schoolSubjectService.updateItem(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.schoolSubjectService.deleteItem(id);
    }

    @Post()
    createUser(@Body() updateCourseDto: any) {
        return this.schoolSubjectService.create(updateCourseDto);
    }
}
