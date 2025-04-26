import { Inject, Injectable } from '@nestjs/common'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { DrizzleAsyncProvider } from './drizzle/drizzle.provider'
import { schema } from './drizzle/schema'

@Injectable()
export class AppService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>
  ) {}

  public sayHello() {
    return 'Olá World !'
  }

  async getUsers() {
    const result = await this.db.query.users.findMany()

    return result
  }
}
