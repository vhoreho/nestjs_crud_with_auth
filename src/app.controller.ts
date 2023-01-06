import { Controller, Request, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
}
