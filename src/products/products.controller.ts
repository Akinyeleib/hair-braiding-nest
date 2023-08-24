import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api/v1/products')
export class ProductsController {
  @Get()
  getAllUsers() {
    return 'get all products';
  }
  @Post()
  createUser() {
    return 'products created';
  }
}
