import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Mall } from './mall.entity';
import { MallService } from './mall.service';
import { JwtAuthGuard } from 'src/auth/strategy/wt-auth.guard';

@Controller('mall')
export class MallController {
  constructor(private mallService: MallService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createMall(@Body() createMall: Mall): Promise<Mall> {
    console.log(createMall);

    return this.mallService.createMall(createMall.name);
  }

  @Get('')
  async getAllMalls(): Promise<Mall[]> {
    return this.mallService.findAllMalls();
  }

  @Get(':id')
  async getMallById(@Param('id') id: number): Promise<Mall> {
    return this.mallService.findMall(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateMall(@Param('id') id: number, @Body() mall: Mall): Promise<any> {
    return this.mallService.updateMall(id, mall.name);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteMall(@Param('id') id: number): Promise<any> {
    return this.mallService.deleteMall(id);
  }
}
