import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configDotenv()
  


  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
