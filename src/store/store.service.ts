import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private storeRepository: Repository<Store>,
  ) {}

  async create(store: Store): Promise<Store> {
    return await this.storeRepository.save(store);
  }

  async findAll(): Promise<Array<Store>> {
    return await this.storeRepository.find({
      relations: ['mall'],
    });
  }

  async updateStore(id: number, name: string): Promise<any> {
    return await this.storeRepository.update({ id }, { name });
  }

  async deleteStore(id: number): Promise<any> {
    return await this.storeRepository.delete({ id });
  }
}
