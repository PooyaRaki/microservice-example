FROM node:16.18.0-alpine3.15 as production-build
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build

FROM node:16.18.0-alpine3.15 as production
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
USER node
RUN npm install --omit=dev
COPY --chown=node:node --from=production-build /usr/src/app/dist ./dist
CMD [ "node", "dist/main" ]