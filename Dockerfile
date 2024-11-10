FROM node:alpine

WORKDIR /app

COPY src ./src
COPY prisma ./prisma
COPY .env.production ./.env
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY tsconfig.json ./tsconfig.json
COPY gc-storage-key.json ./gc-storage-key.json


RUN yarn install
RUN npx prisma migrate deploy
RUN yarn build

EXPOSE 4200
EXPOSE 5432

CMD [ "yarn", "start" ]