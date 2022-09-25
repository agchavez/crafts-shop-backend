import { Module } from '@nestjs/common';
import { ProductsService } from './service/products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { TaskService } from './service/task.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, TaskService],
  imports: [TypeOrmModule.forFeature([Product]), ScheduleModule.forRoot()],
})
export class ProductsModule {}
