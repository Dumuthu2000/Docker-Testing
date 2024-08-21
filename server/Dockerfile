#Dockerfile ofr server side

FROM node:18.12.1

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]