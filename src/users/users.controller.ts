import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';

@Controller('api/v1/users')
export class UsersController {
  @Get()
  getAllUsers() {
    return 'get all users';
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    return 'user created';
  }
}
