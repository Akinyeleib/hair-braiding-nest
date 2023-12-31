import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { UpdateUserDTO } from 'src/dtos/update-user.dto';
import { User } from 'src/entities/user.entity';
import { hashPassword } from 'src/utils/bcrypt';
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
  async createUser(createUserDto: CreateUserDTO) {
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
    user.password = await hashPassword(createUserDto.password1);
    if (createUserDto.password1 != createUserDto.password2) {
      throw new BadRequestException('Passwords mismatch');
    } else {
      return this.userRepository.save(user);
    }
  }
  updateUser(userID: number, updateUserDTO: UpdateUserDTO) {
    return {
      message: 'Feature coming soon...',
      userID,
      userDetails: updateUserDTO,
    };
  }
}
