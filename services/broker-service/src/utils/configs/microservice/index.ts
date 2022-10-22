if (!process.env.NODE_ENV) {
    require('dotenv').config();
}

export * from './app.microservice';
export * from './serviceA.microservice';
export * from './serviceB.microservice';
export * from './requestor.microservice';