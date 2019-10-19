export class CreateUserDto {
    id?: string;
    readonly name: string;
    readonly email: string;
    readonly roles: [];
    readonly password: string;
    active?: boolean;
    imageUrl?: string;
}
