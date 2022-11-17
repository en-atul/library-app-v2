<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Step 1. run docker container to avail mongo & rabbitmq in local<br/>
     # docker-compose up -d (i.e. run docker in detached mode)<br/>
        - view rabbitmq interface at http://localhost:15673

## Installation

```bash
$ npm install
$ docker-compose up -d
```
Step 2:
## Running all microservices

```bash
 $ npm run start:dev auth
 $ npm run start:dev books
 $ npm run start:dev members
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

