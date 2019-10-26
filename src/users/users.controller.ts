import {Controller, Get, Post, Body, Param, Put, UseInterceptors, UploadedFile} from '@nestjs/common';
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
    async create(@UploadedFile() file, @Body() createUserDto: CreateUserDto) {
        createUserDto.imageUrl = `files/${file.filename}`;
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
}
