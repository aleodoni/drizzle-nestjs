import { Inject, Injectable, Logger } from '@nestjs/common'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { DrizzleAsyncProvider } from './drizzle/drizzle.provider'
import { schema } from './drizzle/schema'
import { CreateUserDto } from './zod/schemas/create.user.schema'

@Injectable()
export class AppService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>
  ) {}

  private readonly logger = new Logger(AppService.name)

  public sayHello() {
    return 'Olá World !'
  }

  async getUsers() {
    const result = await this.db.query.users.findMany()

    return result
  }

  public async createUser(dto: CreateUserDto) {
    const { name, email } = dto

    try {
      await this.db.insert(schema.users).values({
        name,
        email,
      })
    } catch (error) {
      this.logger.error(error)
    }
  }
}
