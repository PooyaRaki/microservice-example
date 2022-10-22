if (!process.env.NODE_ENV) {
    require('dotenv').config();
}

export * from './postgres.config';
export * from './throttler.config';
export * from './microservice.config';
export * from './postgres.test.config';