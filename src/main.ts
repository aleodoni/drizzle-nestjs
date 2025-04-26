import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestFastifyApplication } from '@nestjs/platform-fastify'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

async function bootstrap() {
  const app: INestApplication =
    await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    )

  app.setGlobalPrefix('api/v1')
  app.enableCors()

  await app.listen(3333, '0.0.0.0')
}
bootstrap()
