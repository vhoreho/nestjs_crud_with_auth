import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    const result = await this.usersService.findUser(user.email);
    if (!result)
      throw new BadRequestException('User with same email does not exist');

    const payload = {
      username: result.username,
      email: result.email,
      active: result.isActive,
    };
    return {
      access_token: this.jwtService.sign(payload),
      payload,
    };
  }

  async register(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      email: user.email,
    };

    await this.usersService.registerUser({
      email: user.email,
      username: user.username,
    });

    return {
      access_token: this.jwtService.sign(payload),
      payload,
    };
  }
}
