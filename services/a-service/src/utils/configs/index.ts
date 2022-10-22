if (!process.env.NODE_ENV) {
    require('dotenv').config();
}

export * from './people.config';
export * from './validation.config';