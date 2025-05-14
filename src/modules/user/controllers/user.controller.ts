/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/Create-userDto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register/google')
  async registerWithGoogle(@Body() dto: CreateUserDto) {
    const user = await this.userService.registerWithGoogle(dto);
    return { message: 'Usuario registrado', user };
  }
}
