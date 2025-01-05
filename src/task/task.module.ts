import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

//modulo exclusivo de task, isso sempre deve ser feito para cada modulo criado, isso auxilia no controle da modularizacao
// SOLID - single responsabilit principle, diferente do mvc que coloca tudo no controler
// no nest voce usa a arquitetura com mais divisao, entao usamos o principio da responsabilidade,
// entao usamos um arquivo so pro controller e outro pro service.
//task controler recebe a requisicao, e vai encaminhar essa requisicao para o service, onde acontecem coisas como
//cadastro e logica de negocios.

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
