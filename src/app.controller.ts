import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common'
import { AppService } from './app.service'
import {
  CreateUserDto,
  createUserSchema,
} from './zod/schemas/create.user.schema'
import { ZodValidationPipe } from './zod/zod.validation.pipe'

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.sayHello()
  }

  @Get('users')
  async getUsers() {
    const result = await this.appService.getUsers()
    return result
  }

  @Post('create-user')
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async createUser(@Body() createUserDto: CreateUserDto) {
    this.appService.createUser(createUserDto)
  }
}
