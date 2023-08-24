import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) userID: number) {
    return this.userService.getOneUser(userID);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.createuser(createUserDto);
  }
}
