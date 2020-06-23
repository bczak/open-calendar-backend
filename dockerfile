FROM node:12

RUN mkdir -p /usr/src/open-calendar

WORKDIR /usr/src/open-calendar

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]