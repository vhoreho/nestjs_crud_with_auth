import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreService } from './store.service';
import { Store } from './store.entity';
import { StoreController } from './store.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoreService],
  exports: [StoreService],
  controllers: [StoreController],
})
export class StoreModule {}
