import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: User) {
    const payload = {
      username: user.username,
      email: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
      payload,
    };
  }

  async register(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    return await this.usersService.registerUser(username, email, password);
  }

  async validateUser(username: string, password: string): Promise<User> {
    const foundUser = await this.usersService.findUser(username);

    if (!foundUser) {
      throw new BadRequestException('User not found');
    }

    const validatePass = await bcrypt.compare(password, foundUser.password);

    if (foundUser && validatePass) {
      return foundUser;
    }

    return null;
  }
}
