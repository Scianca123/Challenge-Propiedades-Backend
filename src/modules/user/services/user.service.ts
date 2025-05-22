import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entitys/userEntity';
import { CreateUserDto } from '../dtos/Create-userDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async registerWithGoogle(dto: CreateUserDto): Promise<User> {
    let user = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      user = this.userRepository.create(dto);
      await this.userRepository.save(user);
    } else {
      if (dto.urlPhoto && user.urlPhoto !== dto.urlPhoto) {
        user.urlPhoto = dto.urlPhoto;
        await this.userRepository.save(user);
      }
    }

    return user;
  }
}
