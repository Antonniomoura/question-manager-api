import {
    Controller,
    Get,
    Request,
    Post,
    UseGuards,
    Param,
    Res,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth/auth.service';
import {JwtStrategy} from './auth/jwt.strategy';
import {FileInterceptor} from '@nestjs/platform-express';
import {extname} from 'path';
import {diskStorage} from 'multer';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(
        private readonly authService: AuthService,
        private jwtStrategy: JwtStrategy,
        private appService: AppService,
    ) {
    }

    @Post('api/login')
    async login(@Request() req) {
        let obj: any = req.body || {};
        if (req.body) {
            console.log(req.body)
            const email = req.body.email.toLocaleLowerCase();
            const password = req.body.password;
            obj = {email, password};
        }
        return this.authService.doLogin(obj);
    }

    @Post('api/me')
    async meUser(@Request() req) {
        let obj: any = req.body || {};
        if (req.body) {
            obj = req.body.user;
        }
        return this.jwtStrategy.validate(obj);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('api/me')
    getProfile(@Request() req) {
        return req.user;
    }

    @Get('files/:fileId')
    async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
        res.sendFile(fileId, {root: 'files'});
    }

    @Post('files')
    @UseInterceptors(FileInterceptor('files',
        {
            storage: diskStorage({
                destination: './files',

                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                    return cb(null, `${randomName}${extname(file.originalname)}`);
                },
            }),
        },
        ),
    )
    async create(@UploadedFile() file, @Res() res) {
        console.log(file)
        return res.send(file);
    }
}
