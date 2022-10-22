import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const PostgresConfig: PostgresConnectionOptions = {
    type: 'postgres',
    synchronize: false,
    host: process.env.POSTGRES_HOST,
    schema: process.env.POSTGRES_SCHEMA,
    database: process.env.POSTGRES_DATABASE,
    port: ~~(process.env.POSTGRES_PORT || 5432),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    migrations: ['dist/migrations/*{ .ts,.js}'],
    entities: ['dist/components/**/*.entity{ .ts,.js}'],
}