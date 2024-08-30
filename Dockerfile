FROM node:alpine

WORKDIR /app

COPY src ./src
COPY prisma ./prisma
COPY .env.production ./.env
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY tsconfig.json ./tsconfig.json


RUN yarn install
RUN npx prisma generate
RUN yarn build

EXPOSE 4200
EXPOSE 5432

CMD [ "yarn", "start" ]