import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    // @InjectRepository(UserRepository) private userRepository: UserRepository,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  getAllUsers() {
    return this.userRepository.find();
  }
  getOneUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
  deleteOneUser(id: number) {
    return this.userRepository.delete(id);
  }
  createuser(createUserDto: CreateUserDTO) {
    const user = new User();
    const {
      username,
      email,
      address,
      phone_number,
      state,
      country,
      role,
      gender,
    } = createUserDto;
    user.username = username;
    user.email = email;
    user.address = address;
    user.phone_number = phone_number;
    user.state = state;
    user.country = country;
    user.role = role;
    user.address = address;
    user.gender = gender;
    user.password = createUserDto.password1;
    if (createUserDto.password1 != createUserDto.password2) {
      throw new BadRequestException('Passwords mismatch');
    } else {
      return this.userRepository.save(user);
    }
  }
}
