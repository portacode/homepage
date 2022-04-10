FROM node:13
COPY package.json /code/package.json
WORKDIR /code
RUN npm install
CMD npm start