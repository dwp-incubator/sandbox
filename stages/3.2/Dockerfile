FROM alpine

RUN apk add --update nodejs

RUN npm install -g nodemon

WORKDIR /app

EXPOSE 8000

CMD ["nodemon","app.js"]

