
# Requestor

This is the client to connect to the microservices.
## Features

- Produces a message to the `Broker` service to start processing the MessageRequest.
- Polls the messaged produced inside `Requestor` queue into defined intervals.
## Tech Stack

**Server:** Node.js, RabbitMQ


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`
The environment that we are running the application in e.g, `production`, `development`

`MICROSERVICE_INTERVAL`
The interval of polling messgaes from broker

`MICROSERVICE_TIMEOUT`
The number of milliseconds after which the timeout error rises.

`BROKER_SERVICE_QUEUE`
The name of `Broker` queue

`BROKER_SERVICE_URL`
The address of `Broker` rabbitMQ server e.g, `amqp://user:pass@127.0.0.1:5672`

`REQUESTOR_SERVICE_QUEUE`
The name of `Requestor` queue

`REQUESTOR_SERVICE_URL`
The address of Requestor rabbitMQ server e.g, `amqp://user:pass@127.0.0.1:5672`
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

