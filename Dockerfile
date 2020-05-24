FROM node:13.12.0-alpine
WORKDIR /usr/src/app/
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
CMD ["npm", "start"]
