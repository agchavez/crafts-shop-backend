import { Injectable } from '@nestjs/common';
import { TaskService } from './task.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { Product } from '../entities/product.entity';
import { UpdateProductDto } from '../dto/request/update-product.dto';
import { CreateProductDto } from '../dto/request/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly taskService: TaskService,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const product = await this.productRepository.save(createProductDto);
      return product;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error creating product');
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
