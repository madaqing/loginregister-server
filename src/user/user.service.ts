import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findUserByID(
    userWhereUniqueInputPrisma: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: userWhereUniqueInputPrisma,
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async getUserByUsername(username: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        username,
      },
    });
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    return this.prismaService.user.create({ data: createUserInput });
  }
}
