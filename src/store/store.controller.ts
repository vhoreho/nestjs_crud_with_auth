import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { Store } from './store.entity';
import { JwtAuthGuard } from 'src/auth/strategy/wt-auth.guard';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Post('')
  async createStore(@Body() store: Store): Promise<Store> {
    return await this.storeService.create(store);
  }

  @Get('')
  async getStores(): Promise<Array<Store>> {
    return await this.storeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateMall(
    @Param('id') id: number,
    @Body() store: Store,
  ): Promise<any> {
    return this.storeService.updateStore(id, store.name);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteMall(@Param('id') id: number): Promise<any> {
    return this.storeService.deleteStore(id);
  }
}
