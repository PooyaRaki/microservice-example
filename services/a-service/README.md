
# A Service

This is the Service that appends a name to the MessageRequest.
## Features
- Consumes the event send by `Broker` queue.
- Produces a completed event into `Broker` queue.
## Tech Stack

**Server:** Node, NestJs, RabbitMQ, Docker, Microservice


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`
The environment that we are running the application in e.g, `production`, `development`

`APP_SERVICE_QUEUE`
The name of `QueueA` queue

`APP_SERVICE_URL`
The address of `QueueA` rabbitMQ server e.g, `amqp://user:pass@127.0.0.1:5672`

`BROKER_SERVICE_QUEUE`
The name of `Broker` queue

`BROKER_SERVICE_URL`
The address of `Broker` rabbitMQ server e.g, `amqp://user:pass@127.0.0.1:5672`

`PEOPLE_NAMES`
The list of people names separated by comma e.g, `Bruno,Hugo,Pooya`
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

