FROM node:16.17-alpine
WORKDIR app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
