import { Module } from '@nestjs/common';
import { MallService } from './mall.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mall } from './mall.entity';
import { MallController } from './mall.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mall])],
  providers: [MallService],
  exports: [MallService],
  controllers: [MallController],
})
export class MallModule {}
