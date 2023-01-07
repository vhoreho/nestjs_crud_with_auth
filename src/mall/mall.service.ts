import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mall } from './mall.entity';

@Injectable()
export class MallService {
  constructor(
    @InjectRepository(Mall) private mallRepository: Repository<Mall>,
  ) {}

  async createMall(name: string): Promise<Mall> {
    return await this.mallRepository.save({ name });
  }

  async findAllMalls(): Promise<Mall[]> {
    return await this.mallRepository.find({
      relations: {
        stores: true,
      },
    });
  }

  async findMall(id: number): Promise<Mall> {
    return await this.mallRepository.findOne({
      where: { id },
      relations: ['stores'],
    });
  }

  async updateMall(id: number, name: string): Promise<any> {
    return await this.mallRepository.update({ id }, { name });
  }

  async deleteMall(id: number): Promise<any> {
    return await this.mallRepository.delete({ id });
  }
}
