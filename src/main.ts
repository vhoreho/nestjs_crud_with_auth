import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  console.log('Bootstrap start');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  console.log('Bootstrap after app');

  const config = new DocumentBuilder()
    .setTitle('Mall')
    .setDescription('The mall API description')
    .setVersion('1.0')
    .addTag('mall')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log('Bootstrap after build');
  await app.listen(80);
}

bootstrap();
