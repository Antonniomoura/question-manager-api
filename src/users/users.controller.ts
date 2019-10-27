import {Controller, Get, Post, Body, Param, Put, UseInterceptors, UploadedFile, Delete} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UsersService} from './users.service';
import {UserInterface} from './interfaces/user.interface';
import {FileInterceptor} from '@nestjs/platform-express';
import {extname} from 'path';
import {diskStorage} from 'multer';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
    }

    @Get(':id')
    async findByCategory(@Param('id') id: string): Promise<CreateUserDto[]> {
        return this.usersService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
        return this.usersService.updateItem(id, createUserDto);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(): Promise<UserInterface[]> {
        return this.usersService.findAll();
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.deleteItem(id);
    }
}
