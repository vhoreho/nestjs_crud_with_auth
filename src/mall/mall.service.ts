import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mall } from './mall.entity';

@Injectable()
export class MallService {
  constructor(
    @InjectRepository(Mall) private mallRepository: Repository<Mall>,
  ) {}

  createMall(name: string): Promise<Mall> {
    return this.mallRepository.save({ name });
  }

  findAllMalls(): Promise<Mall[]> {
    return this.mallRepository.find();
  }

  findMall(id: number): Promise<Mall> {
    return this.mallRepository.findOneBy({ id });
  }

  updateMall(id: number, name: string): Promise<any> {
    return this.mallRepository.update({ id }, { name });
  }

  deleteMall(id: number): Promise<any> {
    return this.mallRepository.delete({ id });
  }
}
