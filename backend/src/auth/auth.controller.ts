import { Body, Controller, Post } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("patient")
    async patientLogin(@Body() loginDto: loginDto) {
        return await this.authService.patientLogin(loginDto)
    }

    @Post("doctor")
    async doctorLogin(@Body() loginDto: loginDto) {
        return await this.authService.doctorLogin(loginDto)
    }

}
