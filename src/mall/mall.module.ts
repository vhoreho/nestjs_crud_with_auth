import { Module } from '@nestjs/common';
import { MallService } from './mall.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mall } from './mall.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mall])],
  providers: [MallService],
  exports: [MallService],
})
export class MallModule {}
