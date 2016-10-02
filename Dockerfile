FROM node:6.4.0

ADD . /code
WORKDIR /code
RUN npm install --production
EXPOSE 9000
CMD ["node", "server/index.js"]