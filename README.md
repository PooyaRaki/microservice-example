
# Microservice Example

This is an event-driven microservice example.
## Features
This is consisted of 4 main Microservice: 
- Requestor: a simple client to connect to the services and poll the results
- Broker: A gateway to dispatch events
- ServiceA: This is the service which appends a random name to the message
- ServiceB: This service appends good bye to the end of the message
## Tech Stack

**Server:** Node, NestJs, RabbitMQ, PostgreSQL, Docker, Microservice


## Installation

In order to install and run this project:
- Go through the readmes and Run each microservice separately.
- Run the requestor with the help of Readme provided.
## License

[GPL-3.0](https://github.com/PooyaRaki/microservice-example/blob/master/LICENSE)


## Authors

- [@PooyaRaki](https://www.github.com/PooyaRaki)