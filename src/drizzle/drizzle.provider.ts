import { ConfigService } from '@nestjs/config'
import { type NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { schema } from './schema'

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider'

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const connectionString = configService.get<string>('DATABASE_URL')
      const pool = new Pool({ connectionString })

      // return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>
      return drizzle(pool, { schema })
    },
  },
]
