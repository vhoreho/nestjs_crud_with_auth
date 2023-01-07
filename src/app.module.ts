import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { MallModule } from './mall/mall.module';
import { Mall } from './mall/mall.entity';
import { StoreModule } from './store/store.module';
import { Store } from './store/store.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'user_db',
      entities: [User, Mall, Store],
      synchronize: true,
    }),
    MallModule,
    StoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
