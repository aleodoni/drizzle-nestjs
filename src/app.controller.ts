import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

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
}
