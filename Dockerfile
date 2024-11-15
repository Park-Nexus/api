FROM node:alpine

WORKDIR /app

COPY src ./src
COPY prisma ./prisma
COPY rules ./rules
COPY .env.production ./.env
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY tsconfig.json ./tsconfig.json
COPY gc-storage-key.json ./gc-storage-key.json


RUN yarn install
RUN npx prisma migrate deploy
RUN npx prisma db seed
RUN yarn build
RUN cp -r prisma/* dist/prisma
RUN cp -r .env dist

EXPOSE 4200
EXPOSE 5432

CMD [ "yarn", "start" ]