import { z } from 'zod'

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string(),
})

export const env = envSchema.parse(process.env)
