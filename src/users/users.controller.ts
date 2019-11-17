import {Controller, Get, Post, Body, Param, Put, UseInterceptors, UploadedFile, Delete, UseGuards} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UsersService} from './users.service';
import {UserInterface} from './interfaces/user.interface';
import {AuthGuard} from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findByCategory(@Param('id') id: string): Promise<CreateUserDto[]> {
        return this.usersService.findById(id);
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string): Promise<CreateUserDto> {
        return this.usersService.findByEmail(email);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
        return this.usersService.updateItem(id, createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(): Promise<UserInterface[]> {
        return this.usersService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.deleteItem(id);
    }
}
