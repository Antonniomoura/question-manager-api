import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
} from '@nestjs/common';
import {CoursesDto} from './dto/courses.dto';
import {CoursesService} from './courses.service';
import {CoursesInterface} from './interfaces/courses.interface';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {
    }

    @Get()
    async findAll(): Promise<CoursesInterface[]> {
        return this.coursesService.findAll();
    }

    @Get(':id')
    async findByCategory(@Param('id') id: string): Promise<CoursesDto[]> {
        return this.coursesService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: any) {
        return this.coursesService.updateItem(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coursesService.deleteItem(id);
    }

    @Post()
    createUser(@Body() updateCourseDto: any) {
        return this.coursesService.create(updateCourseDto);
    }
}
