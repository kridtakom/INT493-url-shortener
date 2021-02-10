#==== Build Stage ====#
FROM node:12-alpine as base

WORKDIR /src
COPY package.json /src/
COPY . /src

#==== Deploy Stage ====#
FROM base as production

ENV NODE_ENV=production
RUN npm install
CMD ["npm", "start", "app.js"]