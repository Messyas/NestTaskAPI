import { Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHaskSync } from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users: UsersDto[] = [
    {
      id: '1',
      username: 'user',
      password: '123456789',
    },
  ];

  create(newUser: UsersDto) {
    newUser.id = uuid(); //cria o id
    newUser.password = bcryptHaskSync(newUser.password, 10); //10 e a quantidade de iteracoes sobre o hask de encriptacao
    this.users.push(newUser);
    console.log(this.users);
  }

  findByUserName(username: string): UsersDto | null {
    return this.users.find((user) => user.username === username);
  }
}
