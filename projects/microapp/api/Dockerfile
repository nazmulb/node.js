FROM node:10.15.0

ENV REFRESHED_AT 2020-08-04

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]