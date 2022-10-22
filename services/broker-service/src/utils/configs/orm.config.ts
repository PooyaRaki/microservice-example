import { DataSource } from 'typeorm';
import { PostgresConfig } from '.';

export default new DataSource(PostgresConfig);