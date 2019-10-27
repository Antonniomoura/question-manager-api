import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {CreateUserDto} from './dto/create-user.dto';
import {UserInterface} from './interfaces/user.interface';
import * as sha256 from 'sha256';

@Injectable()
export class UsersService {
    users: any;

    constructor(@Inject('USER_MODEL') private readonly userModel: Model<UserInterface>) {

    }

    async findById(id: string): Promise<any> {
        return await this.userModel.findById(id).exec();
    }

    async create(createUserDto: CreateUserDto): Promise<UserInterface> {
        const createdCat: any = new this.userModel(createUserDto);
        createdCat.password = sha256(createdCat.password);
        createdCat.email = createdCat.email.toLocaleLowerCase();
        return await createdCat.save();
    }

    async findAll(): Promise<UserInterface[]> {
        return await this.userModel.find().exec();
    }

    async findOne(username: string): Promise<any | undefined> {
        return this.users.find(user => user.username === username);
    }

    async updateItem(id: string, createUserDto: CreateUserDto): Promise<any> {
        return this.userModel.findByIdAndUpdate(id, createUserDto);
    }
    async deleteItem(id: string): Promise<any> {
        await this.userModel.findByIdAndRemove(id);
        return ({delete: true});
    }

    public async findOneByEmail(
        email: string,
    ): Promise<UserInterface> {
        return await this.userModel.findOne({
            email: {$eq: email},
        });
    }

    public async findOneByEmailAndPassword(
        email: string,
        password: string,
    ): Promise<UserInterface> {
        return await this.userModel.findOne({
            email: {$eq: email},
            password: {$eq: sha256(password)},
        });
    }
}
