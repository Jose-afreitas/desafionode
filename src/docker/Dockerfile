FROM node:16-alpine

WORKDIR /usr/src/app

COPY ../package*.json /usr/src/app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]