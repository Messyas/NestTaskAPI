import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  // modulos, o nest e um framework modular - isso faz com seja necessario:
  // cria-se modulos para injecao de dependecias, especificar o que e fornecido ou consumido por modulos

  // como gerar os recursos para a ferramente de tasks
  // nest generate controller task <task e nome>

  // o ideal e modificar o modulo para ser exlusivo, no caso de task
  // nest generate modulo task

  //dto data transfer object - que e o objeto utilizatario para o usuario fazer as requisicoes na hora de solicitar tasks
}
bootstrap();
