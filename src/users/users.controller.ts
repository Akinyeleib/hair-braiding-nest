import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDTO } from 'src/dtos/update-user.dto';

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
  @Delete(':id')
  deleteOneUser(@Param('id', ParseIntPipe) userID: number) {
    return this.userService.deleteOneUser(userID);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.createUser(createUserDto);
  }
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) userID: number,
    @Body() updateUserDTO: UpdateUserDTO,
  ) {
    return this.userService.updateUser(userID, updateUserDTO);
  }
}
