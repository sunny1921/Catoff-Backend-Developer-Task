const express = require('express');
const { createHandler, findAllHandler, findOneHandler, updateHandler, removeHandler } = require('./wallet-address/wallet-address.controller');
const { loginHandler, registerHandler, profileHandler } = require('./auth/auth.controller');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const { DocumentBuilder, SwaggerModule } = require('@nestjs/swagger');
const { ValidationPipe } = require('./common/pipes/validation.pipe');
const { HttpExceptionFilter } = require('./common/filters/http-exception.filter');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Nest CRUD Example')
    .setDescription('The CRUD API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Integrate Express routes
  const expressApp = express();
  expressApp.post('/auth/login', loginHandler);
  expressApp.post('/auth/register', registerHandler);
  expressApp.get('/auth/profile', profileHandler);
  expressApp.post('/wallet-address', createHandler);
  expressApp.get('/wallet-address', findAllHandler);
  expressApp.get('/wallet-address/:id', findOneHandler);
  expressApp.patch('/wallet-address/:id', updateHandler);
  expressApp.delete('/wallet-address/:id', removeHandler);

  // Use the Express app as middleware
  app.use(expressApp);

  await app.listen(3000);
}

bootstrap();
