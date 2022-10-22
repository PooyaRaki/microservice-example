
# A Service

This is the Service that dispatches events
## Features
- Stores `MessageRequest` into `Broker` schema of `PostgreSQL` database.
- Dispatches events into related services.
## Tech Stack

**Server:** Node, NestJs, RabbitMQ, Docker, Microservice


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`
The environment that we are running the application in e.g, `production`, `development`

`THROTTLER_TTL`
The amount of seconds that the request is rate limited.

`POSTGRES_HOST`
The host of `Postgres` database.

`POSTGRES_PORT`
The port of `Postgres` database.

`POSTGRES_DATABASE`
The name of database e.g, `Postgres`

`POSTGRES_SCHEMA`
The name of database schema e.g, `Broker`

`POSTGRES_USER`
The name of database user

`POSTGRES_PASSWORD`
The name of database password

`MICROSERVICE_TIMEOUT`
The number of seconds after which the request will be timed out

`BROKER_SERVICE_QUEUE`
The name of `Broker` queue

`BROKER_SERVICE_URL`
The address of `Broker` rabbitMQ server e.g, `amqp://user:pass@127.0.0.1:5672`

`SERVICE_A_QUEUE`
The name of `QueueA` queue

`SERVICE_A_URL`
The address of `QueueA` rabbitMQ server e.g, `amqp://user:pass@127.0.0.1:5672`

`SERVICE_B_QUEUE`
The name of `QueueB` queue

`SERVICE_B_URL`
The address of `QueueB` rabbitMQ server e.g, `amqp://user:pass@127.0.0.1:5672`

`REQUESTOR_SERVICE_QUEUE`
The name of `Requestor` queue

`REQUESTOR_SERVICE_URL`
The address of `Requestor` rabbitMQ server e.g, `amqp://user:pass@127.0.0.1:5672`


## Installation

Install Requestor with npm

```bash
  npm install
  npm run build
```
And then, run the project by:
```bash
  npm run start:prod
```
## License

[GPL-3.0](https://github.com/PooyaRaki/microservice-example/blob/master/LICENSE)


## Authors

- [@PooyaRaki](https://www.github.com/PooyaRaki)

