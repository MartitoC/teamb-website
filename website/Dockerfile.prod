FROM node:20-alpine
WORKDIR /app
RUN npm i -g npm@latest
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]