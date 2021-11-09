FROM node:16-alpine

WORKDIR /app

COPY . /app

EXPOSE 3000

RUN npm install

RUN npm install -g nodemon

CMD npm start