
# Microservice Example

This project is an event-driven microservice example.
## Features
It consists of 4 main Microservice: 
- Requestor: a simple client to connect to the services and poll the results
- Broker: A gateway to dispatch events
- ServiceA: This is the service that appends a random name to the message
- ServiceB: This service appends goodbye to the end of the message
## Tech Stack

**Server:** Node, NestJs, RabbitMQ, PostgreSQL, Docker, Microservice


## Installation
<br />

### **Docker**
<br />

To run this project with docker call the installer:
```bash
    sh install.sh
    cd requestor
    npm run start:prod
```
** **Environment** variables described in the related README files must be carefully set.

<br />

### **Node**
<br />

To install and run this project manually:
- Go through the readmes and Run each microservice separately.
- Run the requestor with the help of the Readme provided.
## License

[GPL-3.0](https://github.com/PooyaRaki/microservice-example/blob/master/LICENSE)


## Authors

- [@PooyaRaki](https://www.github.com/PooyaRaki)