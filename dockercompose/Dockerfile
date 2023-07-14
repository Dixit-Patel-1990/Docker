FROM node:18.16.1-alpine3.18

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "start"]