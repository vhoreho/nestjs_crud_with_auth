import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findUser(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }

  registerUser(user: { username: string; email: string }): Promise<User> {
    return this.usersRepository.save(user);
  }
}
