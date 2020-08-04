# Microservices

### Setup:

Please clone this repo and run the following commands:

```sh
git clone https://github.com/nazmulb/node.js.git
cd node
npm i
```

### Running App:

```sh
docker-compose up
```

Please run the following command:

```sh
docker exec api bash -c "npm run db && npm run migrate && npm run seed"
```

### Open your browser and use the below URL:
`http://localhost:3000/`