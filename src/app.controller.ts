import {
  Controller,
  Request,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { MallService } from './mall/mall.service';
import { Mall } from './mall/mall.entity';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private mallService: MallService,
  ) {}

  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Post('malls')
  async createMall(@Body() createMall: Mall): Promise<Mall> {
    return this.mallService.createMall(createMall.name);
  }

  @Get('malls')
  async getAllMalls(): Promise<Mall[]> {
    return this.mallService.findAllMalls();
  }

  @Get('malls/:id')
  async getMallById(@Param('id') id: number): Promise<Mall> {
    return this.mallService.findMall(id);
  }

  @Put('malls/:id')
  async updateMall(@Param('id') id: number, @Body() mall: Mall): Promise<any> {
    console.log(await this.mallService.updateMall(id, mall.name));

    return this.mallService.updateMall(id, mall.name);
  }

  @Delete('malls/:id')
  async deleteMall(@Param('id') id: number): Promise<any> {
    return this.mallService.deleteMall(id);
  }
}
