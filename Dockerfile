#==== Build Stage ====#
FROM node:12-alpine as base

WORKDIR /src
COPY package.json /src/
COPY . /src
RUN npm i -g pm2

#==== Deploy Stage ====#
FROM base as production

ENV NODE_ENV=production
ENV NODE_ENV=production
RUN npm install
CMD ["pm2", "start", "npm", "--", "app.js"]