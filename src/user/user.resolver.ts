import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CreateUserInput } from './user.input';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query('user')
  async getUserByID(@Args('id') id: number) {
    return this.userService.findUserByID({ id: Number(id) });
  }
  @Query('users')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Query('getUserByUsername')
  async getUserByUsername(@Args('username') username: string) {
    return this.userService.getUserByUsername(username);
  }
  @Mutation('addUser')
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}
