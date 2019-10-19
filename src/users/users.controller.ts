import {Controller, Get, Post, Body, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
    async findAll(): Promise<UserInterface[]> {
    return this.usersService.findAll();
  }
}
