import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { env } from 'src/env'
import { users } from './schema/users'

async function main() {
  const pool = new Pool({
    connectionString: env.DATABASE_URL,
  })

  const db = drizzle({ client: pool })

  // Delete all data
  await db.delete(users)

  console.log('All data deleted.')

  // Insert Data
  await db.insert(users).values([
    {
      name: 'Alexandre Odoni',
      email: 'aleodoni@gmail.com',
    },
    {
      name: 'Daniele Richter Odoni',
      email: 'daniele.odoni@gmail.com',
    },
  ])

  console.log('Data inserted.')

  process.exit(0)
}

main()
