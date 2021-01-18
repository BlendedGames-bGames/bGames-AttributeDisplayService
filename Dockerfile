FROM node:lts-alpine
WORKDIR /usr/src/app
COPY bGames-AttributeDisplayService/package*.json ./
RUN npm install
COPY bGames-AttributeDisplayService ./
RUN ls -l
CMD ["npm", "run", "prod"]