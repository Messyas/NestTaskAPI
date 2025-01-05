import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK) //altera o status para 200 ao invez de 201
  @Post('login')
  signIn(
    @Body('username') username: string,
    @Body('password') password: string,
  ): AuthResponseDto {
    return this.authService.sighIn(username, password);
  }
}
