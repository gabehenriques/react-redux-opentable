FROM node:13.12.0-alpine
WORKDIR /usr/src/app/
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
EXPOSE 3000
CMD ["npm", "start"]
