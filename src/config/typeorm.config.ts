import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  port: 3306,
  database: 'hair_braiding',
  // entities: [__dirname + '/src/entities/*.entity.ts'],
  entities: [User],
  synchronize: true,
};
