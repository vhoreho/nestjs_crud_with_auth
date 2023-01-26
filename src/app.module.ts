import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { MallModule } from './mall/mall.module';
import { Mall } from './mall/mall.entity';
import { StoreModule } from './store/store.module';
import { Store } from './store/store.entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'uhserver.postgres.database.azure.com',
      port: 5432,
      username: 'uhadmin',
      password: 'UHServer$',
      database: 'postgres',
      entities: [User, Mall, Store],
      synchronize: false,
      ssl: true,
    }),
    MallModule,
    StoreModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
