import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';

@Controller('api/v1/users')
export class UsersController {
  @Get()
  getAllUsers() {
    return 'get all users';
  }
  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) userID: number) {
    return 'get one user: ' + userID;
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    return 'one user created';
  }
}
