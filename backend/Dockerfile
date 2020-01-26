FROM node:12-alpine

WORKDIR /backend

COPY package.json .

RUN npm install

RUN npm install nodemon -g

COPY . . 

EXPOSE 3000

CMD npm run dev