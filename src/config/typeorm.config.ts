import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  port: 3306,
  database: 'hair_braiding',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
