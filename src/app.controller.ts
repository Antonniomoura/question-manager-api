import {Controller, Get, Request, Post, UseGuards, Param, Res} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth/auth.service';
import {JwtStrategy} from './auth/jwt.strategy';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService, private jwtStrategy: JwtStrategy) {
    }

    @Post('api/login')
    async login(@Request() req) {
        let obj: any = req.body || {};
        if (req.body) {
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
        console.log(fileId)
        res.sendFile(fileId, {root: 'avatars'});
    }
}
